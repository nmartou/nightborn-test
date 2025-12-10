"use server";

import type { TodoItem as TodoItemType } from "@/types/todoList.type";

// sorting by creation date or alphabetical
export async function sortData(data: TodoItemType[], type: "date" | "alpha", ascending: boolean = true) {
    const sorted = [...data];

    switch(type) {
        case "date":
            return sorted.sort((a, b) => {
                const dateA = new Date(a.created_at).getTime();
                const dateB = new Date(b.created_at).getTime();
                return ascending ? dateA - dateB : dateB - dateA;
            });
        case "alpha":
            return sorted.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return ascending
                ? titleA.localeCompare(titleB)
                : titleB.localeCompare(titleA);
        });
    }
}