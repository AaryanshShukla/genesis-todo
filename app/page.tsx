'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';
import { Todo, Category, Priority } from '@/lib/db';
import { Web3Provider } from '@/components/web3/Web3Provider';
import { AiAssistant } from '@/components/ai/AiAssistant';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error('Failed to fetch todos', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData: {
    text: string;
    category: Category;
    priority: Priority;
    tags?: string[];
    dueDate?: number;
  }) => {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoData),
      });
      const newTodo = await res.json();
      setTodos(prev => [...prev, newTodo]);
    } catch (error) {
      console.error('Failed to add todo', error);
    }
  };

  const addMultipleTodos = async (texts: string[]) => {
    for (const text of texts) {
      await addTodo({
        text,
        category: 'other',
        priority: 'medium',
      });
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      setTodos(todos.map(t => t.id === id ? { ...t, completed } : t));
      await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });
    } catch (error) {
      console.error('Failed to update todo', error);
      fetchTodos();
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      setTodos(todos.filter(t => t.id !== id));
      await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Failed to delete todo', error);
      fetchTodos();
    }
  };

  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    try {
      setTodos(todos.map(t => t.id === id ? { ...t, ...updates } : t));
      await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
    } catch (error) {
      console.error('Failed to update todo', error);
      fetchTodos();
    }
  };

  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30 overflow-hidden">
      {/* 3D Background - fixed with pointer-events-none */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/5">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-xl font-black">⚡</span>
              </div>
              <div>
                <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  GENESIS
                </h1>
                <p className="text-xs text-white/50">AI-Powered Todo</p>
              </div>
            </div>
            {process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID && <ConnectButton />}
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
              Turn Ideas Into Action
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Professional task management with AI-powered brainstorming
            </p>
          </motion.div>

          <TodoInput onAdd={addTodo} />

          {loading ? (
            <div className="flex justify-center mt-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              </div>
            </div>
          ) : (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          )}
        </div>
      </div>

      {/* AI Assistant */}
      <AiAssistant onAddTodos={addMultipleTodos} />
    </main>
  );
}

export default function Page() {
  return (
    <Web3Provider>
      <TodoApp />
    </Web3Provider>
  );
}
