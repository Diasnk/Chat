"use client"

import ChatComponent from '@/components/chatComponent'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"

export default function Home() {
	const router = useRouter()
	return (
		<>
			<div>
				<div className='w-full flex justify-between pr-12 pt-24'>
					<div>
						<h1 className='pt-32 pl-10 font-bold text-4xl text-slate-500'>Future AI Chat Bot <br></br> Is a Flexible Solution </h1>
						
						<h1 className='pl-10 font-bold text-4xl text-slate-700'>For your travel problems</h1>
						<Button 
						className='bg-[#6C63FF] text-white hover:bg-[#8881F1] w-24 m-10 font-semibold' 
						variant="secondary" 
						onClick={() => {
							router.push("./guide")
						}}>Open Chat</Button>
					</div>
					<img className='w-1/2 ' src='hero.svg'></img>
				</div>
			</div>
		</>
	)
}
