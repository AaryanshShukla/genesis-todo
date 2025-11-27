import { NextResponse } from 'next/server';
import { getTodos, saveTodos, Todo } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

// Polyfill for uuid if not installed, or just use crypto.randomUUID
const generateId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return Math.random().toString(36).substring(2, 15);
};

export async function GET() {
    const todos = getTodos();
    return NextResponse.json(todos);
}

export async function POST(request: Request) {
    const body = await request.json();

    if (!body.text) {
        return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const todos = getTodos();
    const newTodo: Todo = {
        id: generateId(),
        text: body.text,
        completed: false,
        createdAt: Date.now(),
        priority: body.priority || 'none',
        category: body.category || 'other',
        subtasks: body.subtasks || [],
        tags: body.tags || [],
        dueDate: body.dueDate,
        notes: body.notes,
        color: body.color,
    };

    todos.push(newTodo);
    saveTodos(todos);

    return NextResponse.json(newTodo, { status: 201 });
}
