import { Task } from "@prisma/client"
import { TbAlertHexagonFilled } from "react-icons/tb"
import { TaskButtonDelete } from "./TaskButtonDelete"
import Link from "next/link"

interface Props {
    task: Task
}

export default function Card({ task }: Props) {
    return (
        <div className='relative group flex gap-4 min-h-64 max-h-64 p-6 border-2 border-black border-b-8 rounded-xl cursor-pointer duration-300 hover:bg-black'>
            <div className='flex flex-col justify-between gap-4 w-1/2'>
                <div className='flex flex-wrap'>
                    {task.name.split(' ').map((part, index) => (
                        index < 3 ? (
                            <h3 key={index} className='text-lg font-semibold px-1 bg-teal-300 w-fit duration-300 group-hover:bg-white'>
                                {part}
                            </h3>
                        ) : (
                            <h3 key={index} className='text-lg font-semibold px-1 bg-teal-300 w-fit duration-300 group-hover:bg-white'>
                                ...
                            </h3>
                        )
                    ))}
                </div>
                <div className='opacity-100 flex flex-col justify-end gap-2 group-hover:opacity-0'>
                    <span className='flex gap-1 items-center group-hover:text-white'>
                        <TbAlertHexagonFilled size={24} className='text-black' />
                        {task.priority}
                    </span>
                    <span className='text-sm text-black font-medium'>Create at: {new Date(task.createAt).toDateString()}</span>
                </div>
            </div>
            <p className='text-wrap w-1/2 overflow-x-auto scroll group-hover:text-white'>{task.description}</p>

            {/* MODAL */}
            <div className='absolute opacity-0 flex items-center gap-4 bottom-6 group-hover:opacity-100'>
                <Link href={`/task/${task.id}/edit`} className='rounded-md py-2 px-4 text-slate-950 text-sm font-semibold bg-white duration-300 hover:bg-teal-300'>Edit</Link>
                <TaskButtonDelete id={task.id} />
            </div>
        </div>
    )
}