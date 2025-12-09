"use client"

import TodoList from "@/components/todo/todoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <main>
        <QueryClientProvider client={queryClient}>
          <TodoList />
        </QueryClientProvider>
      </main>
    </div>
  );
}
