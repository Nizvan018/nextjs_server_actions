import TaskFormServer from '@components/newTask/TaskFormServer';

export default async function NewTask() {
    return (
        <div className='flex justify-center items-center min-h-screen pt-20'>
            <TaskFormServer title='Create' />
        </div>
    )
}