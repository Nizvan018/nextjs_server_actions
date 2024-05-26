'use client'

import Select from 'react-select';

const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
]

export default function TaskForm() {
    const changeOption = (newValue) => {
        console.log(newValue);
    }

    return (
        <form className="flex flex-col gap-4 h-full p-6 rounded-lg text-white bg-slate-950">
            <div className="mb-4">
                <h1 className="w-fit px-1 text-slate-950 text-2xl font-semibold bg-white">Create a new Task</h1>
                <p className="mt-2 text-sm">Fill out the form bellow to create a new Task</p>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input type="text" className="py-2 px-4 text-sm border border-white/30 rounded-md bg-transparent outline-none duration-300 focus:border-white/50" placeholder="Put a title to your task!" />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Description</label>
                <textarea rows={4} className="resize-none py-2 px-4 text-sm border border-white/30 rounded-md bg-transparent outline-none duration-300 focus:border-white/50" placeholder="Put a title to your task!" />
            </div>

            <Select
                options={options}
                defaultValue={{ value: '', label: 'Choose wisely...' }}
                classNames={{

                }}
                onChange={changeOption}
            />

            <div className="flex justify-between items-center gap-2 mt-4">
                <button className="rounded-md py-2 px-4 text-slate-950 text-sm font-semibold bg-white duration-300 hover:px-8">Create</button>
                <button className="flex text-white text-sm font-medium duration-300 hover:text-red-400">Cancelar</button>
            </div>
        </form>
    )
}