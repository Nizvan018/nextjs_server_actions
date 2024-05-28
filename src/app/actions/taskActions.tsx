"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createTask = async (data: FormData) => {
    const name = data.get("name")?.toString();
    const description = data.get("description")?.toString();
    const priority = data.get("priority")?.toString();

    if (!name || !description || !priority) {
        return;
    }

    const res = await prisma.task.create({
        data: {
            name: name,
            description: description,
            priority: priority
        }
    });

    redirect('/');
}

export const removeTask = async (data: FormData) => {

    const taskId = data.get('taskId')?.toString();

    if (!taskId) {
        return;
    }

    await prisma.task.delete({
        where: {
            id: taskId
        }
    });

    revalidatePath('/');
}

export const updateTask = async (data: FormData) => {
    const id = data.get("id")?.toString();
    const name = data.get("name")?.toString();
    const description = data.get("description")?.toString();
    const priority = data.get("priority")?.toString();

    if (!id || !name || !description || !priority) {
        return;
    }

    await prisma.task.update({
        where: {
            id: id
        },
        data: {
            name: name,
            description: description,
            priority: priority
        }
    });

    redirect('/');
}