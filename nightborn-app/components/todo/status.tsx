"use client";

export default function Status(props: { completed: boolean, changeStatus?: () => void, className?: string}) {
    return(
        <div className={props.className} onClick={props.changeStatus ? props.changeStatus : undefined}>
            {props.completed ? (
                <span className="text-green-600 font-bold rounded-lg bg-green-200 p-3">Completed</span>
            ) : (
                <span className="text-red-600 font-bold rounded-lg bg-red-200 p-3">Not Completed</span>
            )}
        </div>
    )
}