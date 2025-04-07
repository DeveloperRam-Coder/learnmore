'use client';

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
} from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CheckCircle,
  Circle,
  Clock,
  XCircle,
  ChevronDown,
  ChevronUp,
  Filter,
} from 'lucide-react';
import { useTaskContext } from '@/contexts/TaskContext';
import { HTMLTagTask } from '@/data/htmlTags';

type TaskStatus = 'In Progress' | 'Backlog' | 'Todo' | 'Done' | 'Canceled';
type TaskPriority = 'High' | 'Medium' | 'Low';

interface TaskListProps {
  tasks: HTMLTagTask[];
  title: string;
  description?: string;
  category: string;
}

const TaskList: React.FC<TaskListProps> = memo(
  ({ tasks, title, description, category }) => {
    const {
      setTasks,
      toggleTaskStatus,
      expandedTaskId,
      setExpandedTaskId,
      filterTasks,
      setActiveFilters,
    } = useTaskContext();

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [priorityFilter, setPriorityFilter] = useState<string>('All');
    const [typeFilter, setTypeFilter] = useState<string>('All');
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // initialize
    useEffect(() => {
      setTasks(category, tasks);
      setIsLoading(false);
    }, [category, tasks, setTasks]);

    const filters = useMemo(
      () => ({
        status: statusFilter,
        priority: priorityFilter,
        type: typeFilter,
        searchTerm,
      }),
      [statusFilter, priorityFilter, typeFilter, searchTerm]
    );

    const filteredTasks = useMemo(
      () => filterTasks(category, filters),
      [category, filters, filterTasks]
    );

    useEffect(() => {
      setActiveFilters(category, filters);
    }, [category, filters, setActiveFilters]);

    const handleTaskClick = useCallback(
      (task: HTMLTagTask) => {
        setExpandedTaskId(task.id);
      },
      [setExpandedTaskId]
    );

    const handleStatusToggle = useCallback(
      (e: React.MouseEvent | React.ChangeEvent<HTMLInputElement>, id: string) => {
        e.stopPropagation();
        toggleTaskStatus(category, id);
      },
      [category, toggleTaskStatus]
    );

    if (isLoading) {
      return (
        <div className="w-full text-center py-10">Loading tasks…</div>
      );
    }

    const getStatusIcon = (status: TaskStatus) => {
      switch (status) {
        case 'In Progress':
          return <Clock className="text-blue-500" size={16} />;
        case 'Done':
          return <CheckCircle className="text-green-500" size={16} />;
        case 'Backlog':
          return <Clock className="text-gray-500" size={16} />;
        case 'Todo':
          return <Circle className="text-gray-400" size={16} />;
        case 'Canceled':
          return <XCircle className="text-gray-500" size={16} />;
      }
    };

    const getPriorityIcon = (priority: TaskPriority) => {
      switch (priority) {
        case 'High':
          return (
            <span className="inline-flex items-center text-red-600 font-semibold">
              High
            </span>
          );
        case 'Medium':
          return (
            <span className="inline-flex items-center text-yellow-600 font-semibold">
              Medium
            </span>
          );
        case 'Low':
          return (
            <span className="inline-flex items-center text-green-600 font-semibold">
              Low
            </span>
          );
      }
    };

    return (
      <div className="w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          {description && (
            <p className="text-slate-600">{description}</p>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Filter tasks…"
            className="w-full max-w-sm px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          {/* Status */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setShowStatusDropdown(s => !s)
              }
            >
              <Filter size={14} />
              <span>Status: {statusFilter}</span>
              {showStatusDropdown ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )}
            </Button>
            {showStatusDropdown && (
              <div className="absolute right-0 mt-1 w-40 bg-white border rounded shadow z-10">
                {[
                  'All',
                  'Todo',
                  'In Progress',
                  'Done',
                  'Backlog',
                  'Canceled',
                ].map(s => (
                  <button
                    key={s}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100"
                    onClick={() => {
                      setStatusFilter(s);
                      setShowStatusDropdown(false);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Priority */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setShowPriorityDropdown(p => !p)
              }
            >
              <Filter size={14} />
              <span>Priority: {priorityFilter}</span>
              {showPriorityDropdown ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )}
            </Button>
            {showPriorityDropdown && (
              <div className="absolute right-0 mt-1 w-40 bg-white border rounded shadow z-10">
                {['All', 'High', 'Medium', 'Low'].map(p => (
                  <button
                    key={p}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100"
                    onClick={() => {
                      setPriorityFilter(p);
                      setShowPriorityDropdown(false);
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Type */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setShowTypeDropdown(t => !t)
              }
            >
              <Filter size={14} />
              <span>Type: {typeFilter}</span>
              {showTypeDropdown ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )}
            </Button>
            {showTypeDropdown && (
              <div className="absolute right-0 mt-1 w-40 bg-white border rounded shadow z-10">
                {['All', 'Documentation', 'Feature', 'Bug'].map(t => (
                  <button
                    key={t}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100"
                    onClick={() => {
                      setTypeFilter(t);
                      setShowTypeDropdown(false);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Task Table */}
        <Card className="overflow-hidden border rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b">
                  <th className="w-8 px-4 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-sm">
                    Task
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-sm">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-sm">
                    Priority
                  </th>
                  <th className="w-8 px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map(task => (
                  <tr
                    key={task.id}
                    className={`border-b hover:bg-slate-50 cursor-pointer ${
                      expandedTaskId === task.id
                        ? 'bg-slate-50'
                        : ''
                    }`}
                    onClick={() => handleTaskClick(task)}
                  >
                    <td
                      className="px-4 py-3"
                      onClick={e => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={task.status === 'Done'}
                        onChange={e =>
                          handleStatusToggle(e, task.id)
                        }
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-800">
                            {task.type}
                          </span>
                          <span
                            className={
                              task.status === 'Done'
                                ? 'line-through text-slate-500'
                                : ''
                            }
                          >
                            {task.title}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={e =>
                            handleStatusToggle(e, task.id)
                          }
                        >
                          {getStatusIcon(task.status)}
                        </button>
                        <span className="text-sm">
                          {task.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-slate-700">
                        {getPriorityIcon(task.priority)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        className="text-slate-400 hover:text-slate-600"
                        onClick={e => {
                          e.stopPropagation();
                          handleTaskClick(task);
                        }}
                      >
                        {expandedTaskId === task.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="text-sm text-slate-500">
              {filteredTasks.filter(t => t.status === 'Done').length} of{' '}
              {filteredTasks.length} task(s) completed.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">
                Rows per page
              </span>
              <select className="bg-transparent border rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <div className="flex items-center gap-1">
                <span className="text-sm text-slate-500">
                  Page 1 of {Math.ceil(filteredTasks.length / 10)}
                </span>
                <div className="flex">
                  <button className="p-1 rounded hover:bg-slate-100">
                    <ChevronDown size={16} />
                  </button>
                  <button className="p-1 rounded hover:bg-slate-100">
                    <ChevronUp size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
);

TaskList.displayName = 'TaskList';
export default TaskList;
