"use server"

import { NextResponse } from "next/server";
import file from "@/app/data.json";
import { sortData } from "@/lib/APIUtils";

// Fetch specific todo - TODO
export async function GET(req: Request, { params } : {params: {id: string}}): Promise<NextResponse> {
    const {id} = await params;
    const idNumber = Number(id);
    if(!idNumber || idNumber === null) return NextResponse.json({ status: 404, message: "Id not found" });
    const data = file.data.find((item) => item.id === idNumber);

    return NextResponse.json({status: 200, data: data});
}

// Update specific todo - TODO
export async function PUT(request: Request): Promise<NextResponse> {
    return NextResponse.json({ status: 201, message: "POST request received" });
}

// Delete specific todo
export async function DELETE(request: Request): Promise<NextResponse> {
    return NextResponse.json({ status: 201, message: "POST request received" });
}