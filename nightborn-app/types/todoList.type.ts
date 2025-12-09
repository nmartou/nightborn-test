export type ItemProps = {
    id: number;
    title: string;
    completed: boolean;
    created_at: string;
}

export type TodoItem = {
    id: number;
    description?: string;
    title: string;
    completed: boolean;
    created_at: string;
}