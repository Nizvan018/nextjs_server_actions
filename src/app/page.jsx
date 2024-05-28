import React from 'react'
import prisma from '@/lib/prisma';
import Card from './components/Card';

export default async function HomePage() {
	const tasks = await prisma.task.findMany();

	return (
		<div className='flex min-h-screen pt-32 md:pt-20 px-4'>
			<section section className='flex flex-col gap-8 w-full' >
				<h1 className='text-4xl font-bold'>My Tasks</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					{tasks.map(task => (
						<Card key={task.id} task={task} />
					))}
				</div>
			</section>
		</div >
	)
}