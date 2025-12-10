"use server";

import { NextResponse } from "next/server";
import file from "@/app/data.json";
import { sortData } from "@/lib/APIUtils";

// Fetch all todos
export async function GET(req: Request): Promise<NextResponse> {
    const { searchParams } = new URL(req.url);

    const sort = searchParams.get("sort");
    const order = searchParams.get("asc");
    if((sort === "alpha" || sort === "date")) {
        const data = await sortData(file.data, sort, order === "false" ? false : true)
        return NextResponse.json({status: 200, data: data});
    }

    return NextResponse.json({status: 200, data: file});
}

// Create a new todo
export async function POST(request: Request): Promise<NextResponse> {
    return NextResponse.json({ status: 201, message: "POST request received" });
}