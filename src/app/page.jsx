import React from 'react'
import prisma from '@/lib/prisma';
import { TbAlertHexagonFilled } from "react-icons/tb";

export default async function HomePage() {
	const tasks = await prisma.task.findMany();

	return (
		<div className='flex min-h-screen pt-32 md:pt-20 px-2'>
			<section section className='flex flex-col gap-8 w-full' >
				<h1 className='text-4xl font-bold'>My Tasks</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-36 h-96 max-h-36'>
					{tasks.map(task => (
						<div key={task.id} className='group flex gap-4 p-6 border-2 border-black border-b-8 rounded-xl cursor-pointer duration-300 hover:bg-black'>
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
								<span className='flex gap-2 group-hover:text-white'>
									<TbAlertHexagonFilled size={24} className='text-black group-hover:text-white' />
									{task.priority}
								</span>
							</div>
							<p className='text-wrap w-1/2 min-h-36 max-h-36 overflow-x-auto scroll group-hover:text-white'>{task.description}</p>
						</div>
					))}
				</div>
			</section>
		</div >
	)
}