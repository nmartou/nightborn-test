"use server";

import { NextResponse } from "next/server";
import file from "@/app/data.json";

// Fetch all todos
export async function GET(): Promise<NextResponse> {
    return NextResponse.json({status: 200, data: file});
}

// Create a new todo
export async function POST(request: Request): Promise<NextResponse> {
    return NextResponse.json({ status: 201, message: "POST request received" });
}