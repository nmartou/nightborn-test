"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos, getSortedTodos } from "@/lib/todo";
import type { TodoItem as TodoType } from "@/types/todoList.type";
import TodoItem from "./todoItem"

export default function TodoList() {
    const queryClient = useQueryClient();

    const { data: todos, isLoading, error } = useQuery<TodoType[]>({
        queryKey: ['todos'],
        queryFn: () => getTodos(),
    }) 

    const mutation = useMutation<TodoType[], Error, {sortType: "date" | "alpha", asc?: boolean}>({
        mutationFn: ({sortType, asc = true}) => getSortedTodos(sortType, asc),
        onSuccess: (sortedTodos) => {
            queryClient.setQueryData<TodoType[]>(["todos"], sortedTodos);
        }
    })

    if (isLoading) return <p className="m-auto w-fit mt-20">Loading...</p>;
    if (error) return <p className="m-auto w-fit mt-20">Error when loading</p>;
    
    return(
        <section className="max-w-3xl m-auto">
            <h1 className="font-bold text-3xl my-20 w-fit m-auto">To do list - Nightborn</h1>
            <div className="flex mb-5">
                <button 
                    onClick={() => {
                        mutation.mutate({sortType: "date", asc: false})
                    }}
                    className="border-2 bg-black hover:bg-transparent text-white hover:text-black rounded-lg px-3 py-2 transition-colors">
                        Date
                </button>
                <button 
                    onClick={() => {
                            mutation.mutate({sortType: "alpha", asc: true})
                        }}
                    className="border-2 bg-black hover:bg-transparent text-white hover:text-black rounded-lg px-3 py-2 transition-colors">
                        Alpha
                </button>
            </div>
            
            {todos && todos.map((item) => {
                return (
                    <TodoItem key={item.id} data={item} />
                )
            })}
        </section>
    )
}