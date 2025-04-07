'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { HTMLTagTask } from '@/data/htmlTags';

type TaskFilters = {
  status?: string;
  priority?: string;
  type?: string;
  searchTerm?: string;
};

type TaskContextType = {
  tasks: Record<string, HTMLTagTask[]>;
  setTasks: (category: string, tasks: HTMLTagTask[]) => void;
  updateTask: (
    category: string,
    taskId: string,
    updatedTask: Partial<HTMLTagTask>
  ) => void;
  toggleTaskStatus: (category: string, taskId: string) => void;
  expandedTaskId: string | null;
  setExpandedTaskId: (id: string | null) => void;
  filterTasks: (category: string, filters: TaskFilters) => HTMLTagTask[];
  activeFilters: Record<string, TaskFilters>;
  setActiveFilters: (category: string, filters: TaskFilters) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTaskContext() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTaskContext must be inside TaskProvider');
  return ctx;
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasksState] = useState<Record<string, HTMLTagTask[]>>({});
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [activeFilters, setActiveFiltersState] = useState<
    Record<string, TaskFilters>
  >({});
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const load = () => {
      try {
        const stored = localStorage.getItem('tasks');
        if (stored) setTasksState(JSON.parse(stored));
      } catch {
        /* ignore */
      } finally {
        setIsLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      const w = window as Window &
        typeof globalThis & { requestIdleCallback?: (cb: () => void) => void };
      if (w.requestIdleCallback) w.requestIdleCallback(load);
      else setTimeout(load, 0);
    }
  }, []);

  // Persist to localStorage (debounced)
  useEffect(() => {
    if (isLoading || !Object.keys(tasks).length) return;
    const id = setTimeout(
      () => localStorage.setItem('tasks', JSON.stringify(tasks)),
      300
    );
    return () => clearTimeout(id);
  }, [tasks, isLoading]);

  const setTasks = useCallback(
    (category: string, categoryTasks: HTMLTagTask[]) => {
      setTasksState(prev => {
        const prevCat = prev[category] || [];
        if (prevCat.length !== categoryTasks.length) {
          return { ...prev, [category]: categoryTasks };
        }
        // compare IDs/status
        const changed = categoryTasks.some((t, i) => {
          const p = prevCat[i];
          return !p || p.id !== t.id || p.status !== t.status;
        });
        return changed ? { ...prev, [category]: categoryTasks } : prev;
      });
    },
    []
  );

  const updateTask = useCallback(
    (
      category: string,
      taskId: string,
      updatedTask: Partial<HTMLTagTask>
    ) => {
      setTasksState(prev => {
        const cat = prev[category] || [];
        return {
          ...prev,
          [category]: cat.map(t =>
            t.id === taskId ? { ...t, ...updatedTask } : t
          ),
        };
      });
    },
    []
  );

  const toggleTaskStatus = useCallback(
    (category: string, taskId: string) => {
      setTasksState(prev => {
        const cat = prev[category] || [];
        return {
          ...prev,
          [category]: cat.map(t => {
            if (t.id !== taskId) return t;
            let next: HTMLTagTask['status'] = 'Todo';
            if (t.status === 'Todo') next = 'In Progress';
            else if (t.status === 'In Progress') next = 'Done';
            else if (t.status === 'Done') next = 'Todo';
            return { ...t, status: next };
          }),
        };
      });
    },
    []
  );

  const setActiveFilters = useCallback(
    (category: string, filters: TaskFilters) => {
      setActiveFiltersState(prev => ({ ...prev, [category]: filters }));
    },
    []
  );

  const filterTasks = useCallback(
    (category: string, filters: TaskFilters): HTMLTagTask[] => {
      const cat = tasks[category] || [];
      const term = filters.searchTerm?.trim().toLowerCase() || '';
      return cat.filter(t => {
        if (filters.status && filters.status !== 'All' && t.status !== filters.status)
          return false;
        if (
          filters.priority &&
          filters.priority !== 'All' &&
          t.priority !== filters.priority
        )
          return false;
        if (filters.type && filters.type !== 'All' && t.type !== filters.type)
          return false;
        if (term) {
          return (
            t.title.toLowerCase().includes(term) ||
            t.description.toLowerCase().includes(term) ||
            t.id.toLowerCase().includes(term)
          );
        }
        return true;
      });
    },
    [tasks]
  );

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
      updateTask,
      toggleTaskStatus,
      expandedTaskId,
      setExpandedTaskId,
      filterTasks,
      activeFilters,
      setActiveFilters,
    }),
    [
      tasks,
      setTasks,
      updateTask,
      toggleTaskStatus,
      expandedTaskId,
      setExpandedTaskId,
      filterTasks,
      activeFilters,
      setActiveFilters,
    ]
  );

  // We render children immediately; loading only affects initial hydrate
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
