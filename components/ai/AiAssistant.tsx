'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Loader2, Lightbulb } from 'lucide-react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export const AiAssistant = ({ onAddTodos }: { onAddTodos: (todos: string[]) => void }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (content: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content,
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setInput('');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: content }),
            });

            const data = await response.json();
            const text = data.response || data.error || 'Sorry, I encountered an error.';

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: text,
            };

            setMessages(prev => [...prev, assistantMessage]);

            // Extract tasks from response
            const lines = text.split('\n').filter((line: string) => line.match(/^\d+\./));
            const tasks = lines.map((line: string) => line.replace(/^\d+\.\s*/, '').trim()).filter((t: string) => t.length > 0);
            if (tasks.length > 0) {
                onAddTodos(tasks);
            }
        } catch (error) {
            console.error('AI Error:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            await sendMessage(input);
        }
    };

    return (
        <>
            {/* Floating button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full shadow-2xl shadow-purple-500/50 text-white"
            >
                <Sparkles size={24} />
            </motion.button>

            {/* Full brainstorm panel */}
            <AnimatePresence>
                {isPanelOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsPanelOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-gray-900/95 backdrop-blur-xl border-l border-purple-500/30 z-50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                                            <Sparkles size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">AI Brainstorm</h2>
                                            <p className="text-sm text-white/60">Break down your goals into actionable tasks</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsPanelOpen(false)}
                                        className="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {messages.length === 0 && (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                            <Lightbulb size={40} className="text-purple-400" />
                                        </div>
                                        <p className="text-white/60 mb-2">Ready to brainstorm?</p>
                                        <p className="text-sm text-white/40">Describe your goal and I'll break it down into tasks</p>
                                    </div>
                                )}

                                {messages.map((m) => (
                                    <div
                                        key={m.id}
                                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl p-4 ${m.role === 'user'
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                                : 'bg-white/10 text-white border border-white/10'
                                                }`}
                                        >
                                            <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                                            <Loader2 size={20} className="text-purple-400 animate-spin" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input */}
                            <div className="p-6 border-t border-white/10">
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Describe your goal..."
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-purple-500/50 transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !input.trim()}
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? <Loader2 size={20} className="animate-spin" /> : 'Send'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
