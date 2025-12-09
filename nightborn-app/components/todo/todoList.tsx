"use client";

import file from "@/app/data.json";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos } from "@/lib/todo";
import type { TodoItem as TodoType } from "@/types/todoList.type";
import TodoItem from "./todoItem"

export default function TodoList() {
    const queryClient = useQueryClient();

    const { data: todos, isLoading, error } = useQuery<TodoType[]>({
        queryKey: ['todos'],
        queryFn: () => getTodos(),
    }) 

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error when loading</p>;
    
    return(
        <section className="max-w-3xl m-auto">
            <h1 className="font-bold text-3xl my-20 w-fit m-auto">To do list - Nightborn</h1>
            {todos && todos.map((item) => {
                return (
                    <TodoItem key={item.id} data={item} />
                )
            })}
        </section>
    )
}