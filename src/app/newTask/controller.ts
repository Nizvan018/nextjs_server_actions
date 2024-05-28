import { Task } from "@prisma/client";

export const createNewTask = async (data: Task) => {
    const res = await fetch('/api/newTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            description: data.description,
            priority: data.priority
        })
    });

    return res;
}