"use client";

import file from "@/app/data.json";
import TodoItem from "./todoItem";

export default function TodoList() {
    return(
        <section className="max-w-3xl m-auto">
            <h1 className="font-bold text-3xl my-20 w-fit m-auto">To do list - Nightborn</h1>
            {file.data.map((item) => {
                return (
                    <TodoItem key={item.id} data={item} />
                )
            })}
        </section>
    )
}