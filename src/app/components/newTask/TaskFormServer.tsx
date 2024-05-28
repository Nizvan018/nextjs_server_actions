import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/ShadSelect";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function TaskFormServer() {
    const onSubmit = async (data: FormData) => {
        "use server"

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

        console.log(res);

        redirect('/');
    }

    return (
        <form action={onSubmit} className="flex flex-col gap-4 h-full p-6 rounded-lg text-white bg-slate-950">
            <div className="mb-4">
                <h1 className="w-fit px-1 text-slate-950 text-2xl font-semibold bg-white">Create a new Task</h1>
                <p className="mt-2 text-sm">Fill out the form bellow to create a new Task</p>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input name="name" type="text" placeholder="Put a title to your task!" className={`border-white/30 focus:border-white/50 py-2 px-4 text-sm border rounded-md bg-transparent outline-none duration-300`} />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Description</label>
                <textarea name="description" rows={4} className="resize-none py-2 px-4 text-sm border border-white/30 rounded-md bg-transparent outline-none duration-300 focus:border-white/50" placeholder="Put a title to your task!" />
            </div>

            <Select name="priority">
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
                <button type="submit" className="rounded-md py-2 px-4 text-slate-950 text-sm font-semibold bg-white duration-300 hover:px-8">Create</button>
                <Link href="/" className="flex text-white text-sm font-medium duration-300 hover:text-red-400">Cancelar</Link>
            </div>
        </form>
    )
}