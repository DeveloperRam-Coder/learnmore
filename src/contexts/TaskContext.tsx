'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { HTMLTagTask } from '@/data/htmlTags';

type TaskContextType = {
  tasks: Record<string, HTMLTagTask[]>;
  setTasks: (category: string, tasks: HTMLTagTask[]) => void;
  updateTask: (category: string, taskId: string, updatedTask: Partial<HTMLTagTask>) => void;
  toggleTaskStatus: (category: string, taskId: string) => void;
  expandedTaskId: string | null;
  setExpandedTaskId: (id: string | null) => void;
  filterTasks: (category: string, filters: TaskFilters) => HTMLTagTask[];
  activeFilters: Record<string, TaskFilters>;
  setActiveFilters: (category: string, filters: TaskFilters) => void;
};

type TaskFilters = {
  status?: string;
  priority?: string;
  type?: string;
  searchTerm?: string;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}

type TaskProviderProps = {
  children: ReactNode;
};

export function TaskProvider({ children }: TaskProviderProps) {
  // State for tasks organized by category
  const [tasks, setTasksState] = useState<Record<string, HTMLTagTask[]>>({});
  // Track which task is currently expanded
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  // Store active filters for each category
  const [activeFilters, setActiveFiltersState] = useState<Record<string, TaskFilters>>({});
  // Add loading state to prevent rendering before data is loaded
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const loadTasks = () => {
      try {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          setTasksState(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Failed to parse stored tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Use requestIdleCallback for non-critical initialization
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadTasks);
    } else {
      // Fallback to setTimeout for browsers that don't support requestIdleCallback
      setTimeout(loadTasks, 0);
    }
  }, []);

  // Save tasks to localStorage with debounce to prevent excessive writes
  useEffect(() => {
    if (isLoading || Object.keys(tasks).length === 0) return;
    
    const timeoutId = setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, 300); // 300ms debounce
    
    return () => clearTimeout(timeoutId);
  }, [tasks, isLoading]);

  // Set tasks for a specific category - memoized with useCallback
  const setTasks = useCallback((category: string, categoryTasks: HTMLTagTask[]) => {
    setTasksState(prevTasks => {
      // Only update if the tasks have changed - use more efficient comparison
      const prevCategoryTasks = prevTasks[category] || [];
      if (prevCategoryTasks.length !== categoryTasks.length) {
        return { ...prevTasks, [category]: categoryTasks };
      }
      
      // Check if any task has changed
      const hasChanged = categoryTasks.some((task, index) => {
        const prevTask = prevCategoryTasks[index];
        return prevTask?.id !== task.id || prevTask?.status !== task.status;
      });
      
      return hasChanged ? { ...prevTasks, [category]: categoryTasks } : prevTasks;
    });
  }, []);

  // Update a specific task - memoized with useCallback
  const updateTask = useCallback((category: string, taskId: string, updatedTask: Partial<HTMLTagTask>) => {
    setTasksState(prevTasks => {
      const categoryTasks = prevTasks[category] || [];
      const updatedTasks = categoryTasks.map(task => 
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
      return { ...prevTasks, [category]: updatedTasks };
    });
  }, []);

  // Toggle task status - memoized with useCallback
  const toggleTaskStatus = useCallback((category: string, taskId: string) => {
    setTasksState(prevTasks => {
      const categoryTasks = prevTasks[category] || [];
      const updatedTasks = categoryTasks.map(task => {
        if (task.id === taskId) {
          let newStatus: HTMLTagTask['status'];
          switch (task.status) {
            case 'Todo':
              newStatus = 'In Progress';
              break;
            case 'In Progress':
              newStatus = 'Done';
              break;
            case 'Done':
              newStatus = 'Todo';
              break;
            default:
              newStatus = 'Todo';
          }
          return { ...task, status: newStatus };
        }
        return task;
      });
      return { ...prevTasks, [category]: updatedTasks };
    });
  }, []);

  // Set active filters - memoized with useCallback
  const setActiveFilters = useCallback((category: string, filters: TaskFilters) => {
    setActiveFiltersState(prev => ({
      ...prev,
      [category]: filters
    }));
  }, []);

  // Filter tasks - memoized with useCallback for better performance
  const filterTasks = useCallback((category: string, filters: TaskFilters): HTMLTagTask[] => {
    const categoryTasks = tasks[category] || [];
    
    // Early return for empty filters or tasks
    if (!filters || categoryTasks.length === 0) return categoryTasks;
    
    // Check if we need to filter at all
    const needsFiltering = 
      (filters.status && filters.status !== 'All') ||
      (filters.priority && filters.priority !== 'All') ||
      (filters.type && filters.type !== 'All') ||
      (filters.searchTerm && filters.searchTerm.trim() !== '');
    
    if (!needsFiltering) return categoryTasks;
    
    // Prepare search term once outside the loop
    const searchTerm = filters.searchTerm?.toLowerCase().trim() || '';
    
    return categoryTasks.filter(task => {
      // Filter by status if specified
      if (filters.status && filters.status !== 'All' && task.status !== filters.status) {
        return false;
      }
      
      // Filter by priority if specified
      if (filters.priority && filters.priority !== 'All' && task.priority !== filters.priority) {
        return false;
      }
      
      // Filter by type if specified
      if (filters.type && filters.type !== 'All' && task.type !== filters.type) {
        return false;
      }
      
      // Filter by search term if specified
      if (searchTerm) {
        return (
          task.title.toLowerCase().includes(searchTerm) ||
          task.description.toLowerCase().includes(searchTerm) ||
          task.id.toLowerCase().includes(searchTerm)
        );
      }
      
      return true;
    });
  }, [tasks]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    tasks,
    setTasks,
    updateTask,
    toggleTaskStatus,
    expandedTaskId,
    setExpandedTaskId,
    filterTasks,
    activeFilters,
    setActiveFilters,
  }), [
    tasks,
    setTasks,
    updateTask,
    toggleTaskStatus,
    expandedTaskId,
    setExpandedTaskId,
    filterTasks,
    activeFilters,
    setActiveFilters
  ]);

  // Show a loading state while tasks are being loaded
  if (isLoading) {
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}