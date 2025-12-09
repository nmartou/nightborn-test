export type itemProps = {
    id: number;
    title: string;
    completed: boolean;
    created_at: string;
}

export type todoItem = {
    id: number;
    description?: string;
    title: string;
    completed: boolean;
    created_at: string;
}