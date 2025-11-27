import { NextResponse } from 'next/server';
import { getTodos, saveTodos } from '@/lib/db';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();
    const todos = getTodos();

    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
        return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    todos[todoIndex] = { ...todos[todoIndex], ...body };
    saveTodos(todos);

    return NextResponse.json(todos[todoIndex]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const todos = getTodos();

    const newTodos = todos.filter((t) => t.id !== id);

    if (newTodos.length === todos.length) {
        return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    saveTodos(newTodos);

    return NextResponse.json({ success: true });
}
