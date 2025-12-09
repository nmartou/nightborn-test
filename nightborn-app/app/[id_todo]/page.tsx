"use client";

import file from "@/app/data.json";
import { useEffect, useState, use } from "react";
import { TodoItem } from '@/types/todoList.type'
import Status from "@/components/todo/status";

export default function Page({params}: { params: Promise<{ id_todo: string }> }) {
    const [todo, setTodo] = useState<TodoItem | null>(null);
    const id = Number(use(params).id_todo);

    useEffect(() => {
        const data = file.data.find((item) => item.id === id);
        setTodo(data || null);
    }, [params])

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

    return(
        <section className="max-w-3xl m-auto border border-gray-500 rounded-lg p-5 mt-20">
            <input type="text" className="text-2xl mb-5 m-auto w-fit" value={todo?.title} onChange={changeTitle} />
            <Status completed={todo?.completed || false} className="m-auto w-fit cursor-pointer" changeStatus={changeStatus} />
            <textarea
                value={todo?.description || ""}
                className="border rounded-sm w-full mt-5"
                onChange={changeDescription}></textarea>
            <div className="flex align-middle justify-space-between">
                <time className="text-gray-600 text-[0.85em]">Created at: {todo?.created_at}</time>
                <div className="flex gap-3 ml-auto">
                    <button className="bg-blue-600 text-white p-2 rounded-lg">Save</button>
                    <button className="bg-red-600 text-white p-2 rounded-lg">Delete</button>
                </div>
            </div>
        </section>
    )
}