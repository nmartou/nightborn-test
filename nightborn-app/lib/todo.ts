"use client";

import { TodoItem } from "@/types/todoList.type";

export async function getTodos(): Promise<TodoItem[]> {
    const res = await fetch("/api/todos");
    if(res.status !== 200) console.error("Data failed to fetch");
    const json =  await res.json();
    console.log(json.data.data)
    return json.data.data;
}

// TODO
export async function changeTodoValue(id: string): Promise<void> {
    await fetch("/api/todos/" + id).then((res) => res.json()).then((data) => {
        console.log(data);
    });
}

export async function getSortedTodos(type: "date" | "alpha", asc: boolean): Promise<TodoItem[]> {
    const res = await fetch("/api/todos?sort=" + type + '&asc=' + asc);
    if(res.status !== 200) console.error("Data failed to fetch");
    const json =  await res.json();
    console.log(json.data)
    return json.data;
}

export async function getTodo(id: number) : Promise<TodoItem> {
    console.log(id)
    const res = await fetch(`/api/todos/${id}`);
    if(res.status !== 200) console.error("Data failed to fetch");
    const json =  await res.json();
    console.log(json)
    return json.data;
}