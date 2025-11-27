'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem } from './TodoItem';
import { Todo, Priority, Category } from '@/lib/db';
import { Filter, Search, AlertCircle, Zap, Clock, Lightbulb, CheckCircle2 } from 'lucide-react';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
    onUpdate?: (id: string, updates: Partial<Todo>) => void;
}

const PRIORITY_PANELS = [
    { id: 'critical', label: 'Critical', icon: AlertCircle, color: 'from-red-500 to-red-600', bg: 'bg-red-500/10 border-red-500/20', priorities: ['critical'] as Priority[] },
    { id: 'high', label: 'High Priority', icon: Zap, color: 'from-orange-500 to-orange-600', bg: 'bg-orange-500/10 border-orange-500/20', priorities: ['high'] as Priority[] },
    { id: 'medium', label: 'Medium', icon: Clock, color: 'from-yellow-500 to-yellow-600', bg: 'bg-yellow-500/10 border-yellow-500/20', priorities: ['medium'] as Priority[] },
    { id: 'ideas', label: 'Ideas & Goals', icon: Lightbulb, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-500/10 border-purple-500/20', categories: ['ideas', 'goals'] as Category[] },
];

export const TodoList = ({ todos, onToggle, onDelete, onUpdate }: TodoListProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter todos based on search
    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Group todos by panels
    const getTodosForPanel = (panel: typeof PRIORITY_PANELS[0]) => {
        return filteredTodos.filter(todo => {
            if (todo.completed) return false;
            if (panel.priorities) {
                return panel.priorities.includes(todo.priority);
            }
            if (panel.categories) {
                return panel.categories.includes(todo.category);
            }
            return false;
        });
    };

    // Get remaining todos (not in any panel and not completed)
    const panelTodoIds = new Set(
        PRIORITY_PANELS.flatMap(panel => getTodosForPanel(panel).map(t => t.id))
    );
    const otherTodos = filteredTodos.filter(todo => !panelTodoIds.has(todo.id) && !todo.completed);
    const completedTodos = filteredTodos.filter(todo => todo.completed);

    if (todos.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
            >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5 flex items-center justify-center">
                    <Lightbulb size={40} className="text-purple-400 opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">All Caught Up!</h3>
                <p className="text-white/40">Start by adding a task or use the AI assistant to brainstorm</p>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            {/* Search bar */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                    <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-purple-400 transition-colors" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search tasks..."
                        className="w-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-lg text-white placeholder:text-white/30 outline-none focus:border-purple-500/50 focus:bg-gray-900/80 transition-all shadow-xl"
                    />
                </div>
            </div>

            {/* Priority Panels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRIORITY_PANELS.map((panel) => {
                    const panelTodos = getTodosForPanel(panel);
                    const Icon = panel.icon;

                    if (panelTodos.length === 0) return null;

                    return (
                        <motion.div
                            key={panel.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`relative overflow-hidden rounded-3xl border ${panel.bg} backdrop-blur-sm p-1`}
                        >
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${panel.color} shadow-lg`}>
                                            <Icon size={18} className="text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{panel.label}</h3>
                                    </div>
                                    <span className="text-xs font-bold text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/5">
                                        {panelTodos.length} TASKS
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <AnimatePresence mode="popLayout">
                                        {panelTodos.slice(0, 3).map((todo) => (
                                            <TodoItem
                                                key={todo.id}
                                                todo={todo}
                                                onToggle={onToggle}
                                                onDelete={onDelete}
                                                onUpdate={onUpdate}
                                            />
                                        ))}
                                    </AnimatePresence>

                                    {panelTodos.length > 3 && (
                                        <button className="w-full py-3 text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5">
                                            Show {panelTodos.length - 3} more tasks
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Other todos */}
            {otherTodos.length > 0 && (
                <div className="relative">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="p-2 rounded-lg bg-white/5">
                            <Filter size={16} className="text-white/60" />
                        </div>
                        <h3 className="text-lg font-semibold text-white/80">Other Tasks</h3>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">{otherTodos.length}</span>
                    </div>
                    <div className="space-y-3">
                        <AnimatePresence mode="popLayout">
                            {otherTodos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                    onUpdate={onUpdate}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}

            {/* Completed section */}
            {completedTodos.length > 0 && (
                <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6 px-2 opacity-60">
                        <CheckCircle2 size={18} className="text-green-400" />
                        <h3 className="text-lg font-semibold text-white">Completed</h3>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">{completedTodos.length}</span>
                    </div>
                    <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <AnimatePresence mode="popLayout">
                            {completedTodos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                    onUpdate={onUpdate}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
};
