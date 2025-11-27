'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronDown, Tag, AlertCircle, Briefcase, User, Lightbulb, Target, ShoppingBag, Heart, BookOpen, Layers } from 'lucide-react';
import { Category, Priority } from '@/lib/db';
import clsx from 'clsx';

interface TodoInputProps {
    onAdd: (todo: { text: string; category: Category; priority: Priority }) => void;
}

const CATEGORIES: { id: Category; label: string; icon: any; color: string }[] = [
    { id: 'work', label: 'Work', icon: Briefcase, color: 'text-blue-400' },
    { id: 'personal', label: 'Personal', icon: User, color: 'text-purple-400' },
    { id: 'ideas', label: 'Ideas', icon: Lightbulb, color: 'text-yellow-400' },
    { id: 'goals', label: 'Goals', icon: Target, color: 'text-green-400' },
    { id: 'shopping', label: 'Shopping', icon: ShoppingBag, color: 'text-pink-400' },
    { id: 'health', label: 'Health', icon: Heart, color: 'text-red-400' },
    { id: 'learning', label: 'Learning', icon: BookOpen, color: 'text-indigo-400' },
    { id: 'other', label: 'Other', icon: Layers, color: 'text-gray-400' },
];

const PRIORITIES: { id: Priority; label: string; color: string }[] = [
    { id: 'critical', label: 'Critical', color: 'bg-red-500' },
    { id: 'high', label: 'High', color: 'bg-orange-500' },
    { id: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { id: 'low', label: 'Low', color: 'bg-blue-500' },
    { id: 'none', label: 'None', color: 'bg-gray-500' },
];

export const TodoInput = ({ onAdd }: TodoInputProps) => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState<Category>('other');
    const [priority, setPriority] = useState<Priority>('none');
    const [showOptions, setShowOptions] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd({ text, category, priority });
            setText('');
            setCategory('other');
            setPriority('none');
            setShowOptions(false);
        }
    };

    const selectedCategory = CATEGORIES.find(c => c.id === category);
    const selectedPriority = PRIORITIES.find(p => p.id === priority);

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-3xl mx-auto mb-12 z-20">
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex items-center p-2">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onFocus={() => setShowOptions(true)}
                            placeholder="What needs to be done?"
                            className="flex-1 bg-transparent px-6 py-4 text-xl text-white placeholder:text-white/30 outline-none"
                        />

                        <div className="flex items-center gap-2 pr-2">
                            <button
                                type="button"
                                onClick={() => setShowOptions(!showOptions)}
                                className="p-3 hover:bg-white/5 rounded-xl text-white/60 hover:text-white transition-colors flex items-center gap-2 border border-transparent hover:border-white/10"
                            >
                                {selectedCategory?.icon && <selectedCategory.icon size={18} className={selectedCategory.color} />}
                                <ChevronDown size={16} className={`transition-transform duration-300 ${showOptions ? 'rotate-180' : ''}`} />
                            </button>

                            <button
                                type="submit"
                                disabled={!text.trim()}
                                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
                            >
                                <Plus size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Expandable Options Panel */}
                    <AnimatePresence>
                        {showOptions && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-white/5 bg-black/20"
                            >
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Categories */}
                                    <div className="space-y-3">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                            <Tag size={12} /> Category
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {CATEGORIES.map((cat) => {
                                                const Icon = cat.icon;
                                                const isSelected = category === cat.id;
                                                return (
                                                    <button
                                                        key={cat.id}
                                                        type="button"
                                                        onClick={() => setCategory(cat.id)}
                                                        className={clsx(
                                                            "flex items-center gap-2 p-2 rounded-lg text-sm transition-all border",
                                                            isSelected
                                                                ? "bg-white/10 border-white/20 text-white"
                                                                : "border-transparent text-white/50 hover:text-white hover:bg-white/5"
                                                        )}
                                                    >
                                                        <Icon size={16} className={cat.color} />
                                                        {cat.label}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Priorities */}
                                    <div className="space-y-3">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                            <AlertCircle size={12} /> Priority
                                        </h3>
                                        <div className="space-y-2">
                                            {PRIORITIES.map((p) => {
                                                const isSelected = priority === p.id;
                                                return (
                                                    <button
                                                        key={p.id}
                                                        type="button"
                                                        onClick={() => setPriority(p.id)}
                                                        className={clsx(
                                                            "w-full flex items-center gap-3 p-2 rounded-lg text-sm transition-all border",
                                                            isSelected
                                                                ? "bg-white/10 border-white/20 text-white"
                                                                : "border-transparent text-white/50 hover:text-white hover:bg-white/5"
                                                        )}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full ${p.color} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
                                                        {p.label}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </form>
    );
};
