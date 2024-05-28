import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/ShadSelect";
import Link from "next/link";
import { createTask, updateTask } from "@/app/actions/taskActions";
import { Task } from "@prisma/client";

interface Props {
    title: string
    task?: Task
}

export default function TaskFormServer({ title, task }: Props) {
    const functionAction = task ? updateTask : createTask;

    return (
        <form action={functionAction} className="flex flex-col gap-4 h-full p-6 rounded-lg text-white bg-slate-950">
            <div className="mb-4">
                <h1 className="w-fit px-1 text-slate-950 text-2xl font-semibold bg-white">{title} Task</h1>
                <p className="mt-2 text-sm">Fill out the form bellow to create a new Task</p>
            </div>

            <div className="flex flex-col gap-1">
                <input type="hidden" name="id" value={task?.id} />

                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Put a title to your task!"
                    defaultValue={task?.name}
                    className={`border-white/30 focus:border-white/50 py-2 px-4 text-sm border rounded-md bg-transparent outline-none duration-300`}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Description</label>
                <textarea
                    name="description"
                    rows={4}
                    placeholder="Put a title to your task!"
                    defaultValue={task?.description != null ? task.description : ''}
                    className="resize-none py-2 px-4 text-sm border border-white/30 rounded-md bg-transparent outline-none duration-300 focus:border-white/50"
                />
            </div>

            <Select name="priority" defaultValue={task?.priority}>
                <SelectTrigger className={`w-full`}>
                    <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                </SelectContent>
            </Select>
            <div className="flex justify-between items-center gap-2 mt-4">
                <button type="submit" className="rounded-md py-2 px-4 text-slate-950 text-sm font-semibold bg-white duration-300 hover:px-8">{title}</button>
                <Link href="/" className="flex text-white text-sm font-medium duration-300 hover:text-red-400">Cancelar</Link>
            </div>
        </form>
    )
}