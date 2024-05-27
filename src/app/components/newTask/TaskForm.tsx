'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/ShadSelect";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TaskForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [priority, setPriority] = useState<string | null>(null);
    const [priorityError, setPriorityError] = useState<string | null>(null);

    const changePriority = (value: string) => {
        setPriority(value);
        setPriorityError(null);
    }

    const onSubmit = handleSubmit((data) => {
        if (priority == null) {
            setPriorityError('Select a priority');
            return
        }

        console.log(data);
    });

    const onCancel = () => {

    }

    return (
        <form className="flex flex-col gap-4 h-full p-6 rounded-lg text-white bg-slate-950">
            <div className="mb-4">
                <h1 className="w-fit px-1 text-slate-950 text-2xl font-semibold bg-white">Create a new Task</h1>
                <p className="mt-2 text-sm">Fill out the form bellow to create a new Task</p>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input {...register('name', {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },
                    minLength: {
                        value: 3,
                        message: 'The name is too short'
                    },
                    maxLength: {
                        value: 80,
                        message: 'The name is too long'
                    }
                })} type="text" placeholder="Put a title to your task!" className={`${errors.name ? 'border-red-500/70 focus:border-red-500/100' : 'border-white/30 focus:border-white/50'} py-2 px-4 text-sm border rounded-md bg-transparent outline-none duration-300`} />
                {errors.name && (
                    <span className="text-red-400 text-xs font-medium">{String(errors.name.message)}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Description</label>
                <textarea {...register('description')} rows={4} className="resize-none py-2 px-4 text-sm border border-white/30 rounded-md bg-transparent outline-none duration-300 focus:border-white/50" placeholder="Put a title to your task!" />
            </div>

            <Select onValueChange={(value) => changePriority(value)}>
                <SelectTrigger className={`w-full ${priorityError != null ? 'border-red-500/70' : ''}`}>
                    <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                </SelectContent>
            </Select>
            {priorityError != null && (
                <span className="text-red-400 text-xs font-medium">{priorityError}</span>
            )}

            <div className="flex justify-between items-center gap-2 mt-4">
                <button onClick={onSubmit} className="rounded-md py-2 px-4 text-slate-950 text-sm font-semibold bg-white duration-300 hover:px-8">Create</button>
                <button onClick={onCancel} className="flex text-white text-sm font-medium duration-300 hover:text-red-400">Cancelar</button>
            </div>
        </form>
    )
}