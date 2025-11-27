'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, Trash2, ChevronDown, ChevronUp, Calendar, Tag, AlertCircle, Clock, Circle } from 'lucide-react';
import { Todo, Priority, Category } from '@/lib/db';
import { useState } from 'react';
import clsx from 'clsx';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
    onUpdate?: (id: string, updates: Partial<Todo>) => void;
}

const PRIORITY_COLORS = {
    critical: 'bg-red-500 shadow-red-500/50',
    high: 'bg-orange-500 shadow-orange-500/50',
    medium: 'bg-yellow-500 shadow-yellow-500/50',
    low: 'bg-blue-500 shadow-blue-500/50',
    none: 'bg-gray-500 shadow-gray-500/50',
};

const CATEGORY_COLORS = {
    work: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    personal: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    ideas: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    goals: 'text-green-400 bg-green-400/10 border-green-400/20',
    shopping: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    health: 'text-red-400 bg-red-400/10 border-red-400/20',
    learning: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    other: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
};

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
    const [expanded, setExpanded] = useState(false);
    const [newSubtask, setNewSubtask] = useState('');

    const handleAddSubtask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newSubtask.trim() || !onUpdate) return;

        const updatedSubtasks = [
            ...(todo.subtasks || []),
            { id: Date.now().toString(), text: newSubtask, completed: false }
        ];
        onUpdate(todo.id, { subtasks: updatedSubtasks });
        setNewSubtask('');
    };

    const toggleSubtask = (subtaskId: string) => {
        if (!onUpdate) return;
        const updatedSubtasks = todo.subtasks?.map(st =>
            st.id === subtaskId ? { ...st, completed: !st.completed } : st
        );
        onUpdate(todo.id, { subtasks: updatedSubtasks });
    };

    const progress = todo.subtasks?.length
        ? Math.round((todo.subtasks.filter(t => t.completed).length / todo.subtasks.length) * 100)
        : 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group mb-4"
        >
            <div className={clsx(
                "relative overflow-hidden rounded-2xl border transition-all duration-300",
                todo.completed
                    ? "bg-gray-900/40 border-white/5"
                    : "bg-gray-800/60 border-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
            )}>
                {/* Priority Indicator Stripe */}
                <div className={clsx(
                    "absolute left-0 top-0 bottom-0 w-1",
                    PRIORITY_COLORS[todo.priority] || PRIORITY_COLORS.none
                )} />

                <div className="p-4 pl-6">
                    <div className="flex items-start gap-4">
                        {/* Checkbox */}
                        <button
                            onClick={() => onToggle(todo.id, !todo.completed)}
                            className={clsx(
                                "mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                todo.completed
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent"
                                    : "border-white/20 hover:border-purple-400"
                            )}
                        >
                            {todo.completed && <Check size={14} className="text-white" />}
                        </button>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className={clsx(
                                    "text-lg font-medium transition-all duration-300",
                                    todo.completed ? "text-white/30 line-through" : "text-white"
                                )}>
                                    {todo.text}
                                </span>

                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => onDelete(todo.id)}
                                        className="p-2 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Meta Badges */}
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                <span className={clsx(
                                    "px-2.5 py-0.5 rounded-full text-xs font-medium border uppercase tracking-wider",
                                    CATEGORY_COLORS[todo.category] || CATEGORY_COLORS.other
                                )}>
                                    {todo.category}
                                </span>

                                {todo.priority !== 'none' && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
                                        <AlertCircle size={10} />
                                        {todo.priority}
                                    </span>
                                )}

                                {todo.subtasks && todo.subtasks.length > 0 && (
                                    <button
                                        onClick={() => setExpanded(!expanded)}
                                        className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-white/60 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                        <span>{progress}%</span>
                                        {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Subtasks Section */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-4 pl-10 pr-2 space-y-2">
                                    {todo.subtasks?.map(subtask => (
                                        <div key={subtask.id} className="flex items-center gap-3 group/sub">
                                            <button
                                                onClick={() => toggleSubtask(subtask.id)}
                                                className={clsx(
                                                    "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                                    subtask.completed
                                                        ? "bg-purple-500/50 border-purple-500/50"
                                                        : "border-white/20 hover:border-white/40"
                                                )}
                                            >
                                                {subtask.completed && <Check size={10} className="text-white" />}
                                            </button>
                                            <span className={clsx(
                                                "text-sm transition-colors",
                                                subtask.completed ? "text-white/30 line-through" : "text-white/70"
                                            )}>
                                                {subtask.text}
                                            </span>
                                        </div>
                                    ))}

                                    <form onSubmit={handleAddSubtask} className="flex items-center gap-2 mt-2">
                                        <div className="w-4 h-4 flex items-center justify-center">
                                            <div className="w-1 h-1 rounded-full bg-white/20" />
                                        </div>
                                        <input
                                            type="text"
                                            value={newSubtask}
                                            onChange={(e) => setNewSubtask(e.target.value)}
                                            placeholder="Add subtask..."
                                            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/20 outline-none border-b border-transparent focus:border-white/20 transition-colors pb-1"
                                        />
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};
