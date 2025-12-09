"use client";

import Link from "next/link";
import Status from "./status";

export default function TodoItem(props: {
    title: string,
    completed: boolean,
    date: string
}) {
    return(
        <Link href="/">
            <article className="border border-black rounded-lg mb-5 p-5 flex align-middle justify-between">
                <div className="flex gap-3">
                    <h2>{props.title}</h2>
                    <Status completed={props.completed} />
                </div>
                <time className="text-[0.85em] text-gray-600">created at: {props.date}</time>
            </article>
        </Link>
    )
}