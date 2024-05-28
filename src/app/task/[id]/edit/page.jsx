import prisma from '@/lib/prisma';
import TaskFormServer from '@components/newTask/TaskFormServer';
import { redirect } from 'next/dist/server/api-utils';

export default async function EditTask({ params }) {
    const task = await prisma.task.findFirst({
        where: {
            id: params.id
        }
    });

    if (!task) {
        redirect('/');
    }

    return (
        <div className='flex justify-center items-center min-h-screen pt-20'>
            <TaskFormServer title='Edit' task={task} />
        </div>
    )
}