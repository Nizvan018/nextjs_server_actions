import { removeTask } from "../actions/taskActions"

interface Props {
    id: string
}

export function TaskButtonDelete({ id }: Props) {
    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={id} />
            <button className="text-white text-sm font-semibold duration-300 hover:text-red-400">Delete</button>
        </form>
    )
}