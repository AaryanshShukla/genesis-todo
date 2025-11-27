import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'todos.json');

export type Priority = 'critical' | 'high' | 'medium' | 'low' | 'none';
export type Category = 'work' | 'personal' | 'ideas' | 'goals' | 'shopping' | 'health' | 'learning' | 'other';

export interface Subtask {
  id: string;
  text: string;
  completed: boolean;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  priority: Priority;
  category: Category;
  subtasks: Subtask[];
  tags: string[];
  dueDate?: number;
  notes?: string;
  color?: string;
}

export const getTodos = (): Todo[] => {
  if (!fs.existsSync(DB_PATH)) {
    return [];
  }
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2));
};
