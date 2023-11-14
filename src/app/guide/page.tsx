import ChatComponent from '@/components/chatComponent'

export default function Guide() {
	return (
        <>
            <div className="bpict flex min-h-screen w-screen flex-col bg-[#041C32] items-center justify-between p-24">
                <div className='p-3 w-[950px] rounded-md text-white'>
                    <h2 className='text-2xl font-semibold'>Chat with online AI Guide</h2>
                    <ChatComponent/>
                </div>
            </div>
        </>
	)
}