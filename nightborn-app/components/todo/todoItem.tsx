"use client";

import Link from "next/link";
import Status from "./status";
import type { ItemProps } from '@/types/todoList.type'

export default function TodoItem(props: {data: ItemProps}) {
    const { id, title, completed, created_at } = props.data;
    return(
        <Link href={`/${id}`}>
            <article className="border border-black rounded-lg mb-5 p-5 flex align-middle justify-between hover:scale-102 transition-transform">
                <div className="flex gap-3">
                    <h2>{title}</h2>
                    <Status completed={completed} />
                </div>
                <time className="text-[0.85em] text-gray-600">created at: {created_at}</time>
            </article>
        </Link>
    )
}