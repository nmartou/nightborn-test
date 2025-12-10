"use client";

import { useState, use } from "react";
import type { TodoItem as TodoItemType } from '@/types/todoList.type'
import Status from "@/components/todo/status";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getTodo } from "@/lib/todo";

export default function Page({params}: { params: Promise<{ id_todo: string }> }) {
    const [todo, setTodo] = useState<TodoItemType | null>(null);
    const id = Number(use(params).id_todo);

    const queryClient = useQueryClient();

    const { data: todoItem, isLoading, error } = useQuery<TodoItemType>({
        queryKey: ['todoItem', id],
        queryFn: ({ queryKey }) => {
            const [, todoId] = queryKey; // ['todo', id]
            return getTodo(todoId as number);
        },
    }) 

    const changeStatus = () => {
        setTodo((prev) => {
            if (!prev) return prev;
            return { ...prev, completed: !prev.completed };
        })
    }

    const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const newDescription = e.target.value;
        setTodo((prev) => {
            if (!prev) return prev;
            return { ...prev, description: newDescription };
        })
    }

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newTitle = e.target.value;
        setTodo((prev) => {
            if (!prev) return prev;
            return { ...prev, title: newTitle };
        })
    }

    if (isLoading) return <p className="m-auto w-fit mt-20">Loading...</p>;
    if (error) return <p className="m-auto w-fit mt-20">Error when loading</p>;

    return(
        <section className="max-w-3xl m-auto border border-gray-500 rounded-lg p-5 mt-20">
            <input type="text" className="text-2xl mb-5 m-auto w-fit" value={todoItem?.title} onChange={changeTitle} />
            <Status completed={todo?.completed || false} className="m-auto w-fit cursor-pointer" changeStatus={changeStatus} />
            <textarea
                value={todoItem?.description || ""}
                className="border rounded-sm w-full mt-5"
                onChange={changeDescription}></textarea>
            <div className="flex align-middle justify-space-between">
                <time className="text-gray-600 text-[0.85em]">Created at: {todoItem?.created_at}</time>
                <div className="flex gap-3 ml-auto">
                    <button className="bg-blue-600 text-white p-2 rounded-lg">Save</button>
                    <button className="bg-red-600 text-white p-2 rounded-lg">Delete</button>
                </div>
            </div>
        </section>
    )
}