"use client";

import { TodoItem } from "@/types/todoList.type";

export async function getTodos(): Promise<TodoItem[]> {
    const res = await fetch("/api/todos");
    if(res.status !== 200) console.error("Data failed to fetch");
    const json =  await res.json();
    console.log(json.data.data)
    return json.data.data;
}

export async function changeTodoValue(id: string): Promise<void> {
    await fetch("/api/todos/" + id).then((res) => res.json()).then((data) => {
        console.log(data);
    });
}