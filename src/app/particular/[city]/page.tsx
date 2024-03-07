import countries from '@/components/Countries'

export default function ParticularCity({params}: any) {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen pt-20 py-2">
				<h1>{countries[params].city}</h1>
                
			</div>
		</>
	)
}