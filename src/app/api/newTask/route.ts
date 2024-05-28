import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await prisma.task.findMany();

        return NextResponse.json(res, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: 'An unexpected error has ocurred' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { name, description, priority } = await req.json();

        const res = await prisma.task.create({
            data: {
                name: name,
                description: description,
                priority: priority
            }
        });

        return NextResponse.json(res, { status: 201 });
    } catch (error: any) {
        if (error.code == 'P2002') {
            return NextResponse.json({ error: 'It already exists that task' }, { status: 400 });
        }

        return NextResponse.json({ error: 'An unexpected error has orcurred' }, { status: 500 });
    }
}