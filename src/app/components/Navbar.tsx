import { SiPolestar } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 flex justify-between items-center gap-8 w-full py-4 px-8 bg-slate-50">
            <div className="flex gap-2 items-center">
                <SiPolestar size={32} />
                <Link href="/" className="bg-teal-300 px-1 font-semibold">Server Actions ToDo</Link>
            </div>

            <ul className="flex items-center gap-4">
                <li className="text-sm font-medium px-1 duration-300 hover:bg-teal-300">
                    <Link href="/">My Tasks</Link>
                </li>
                <li className="text-sm font-medium px-1 duration-300 hover:bg-teal-300">
                    <Link href="/">About the Project</Link>
                </li>
                <li className="text-sm font-medium py-2 px-4 border border-black rounded-lg duration-300 hover:bg-slate-800 hover:border-slate-800 hover:text-white">
                    <Link href="/">Create New Task</Link>
                </li>
            </ul>
        </nav>
    )
}