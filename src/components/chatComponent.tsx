'use client'

import { useChat, Message } from "ai/react"
import { Button } from "./ui/button"



export default function ChatComponent() {
    // usechat -> handles messages for us, user input, handling user submits, etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat()

    // console.log(input)
    return (
        <div>
            {/* Text Messages */}
            {/* {messages.map(message => <p key={message.id}>{message.content}</p>)} */}
            {messages.map((message: Message) => {
                return (
                    <div className="w-full grid grid-cols-1" key={message.id}>
                        {/* Name of person talking */}
                        {
                            message.role == 'assistant'
                                ?
                                <h3 className="text-lg font-semibold mt-2 ">
                                    Future Guide
                                </h3>
                                :
                                <h3 className="text-lg font-semibold mt-2 justify-self-end">
                                    User
                                </h3>
                        }

                        {/* Message (Formatting) */}

                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                )
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1 " key={message.id}>
                                        {
                                            message.role == 'user'
                                                ?
                                                <p className="text-md w-2/3 justify-self-end flex items-end justify-end mt-2" key={message.id + index}>{currentTextBlocks}</p>
                                                :
                                                <p className="text-md bg-green w-2/3 justify-self-start mt-2" key={message.id + index}>{currentTextBlocks}</p>
                                        }
                                    </div>
                                )
                            }
                        })}
                    </div>

                )
            })}
            <div className="h-full p-12">

            <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                {/* <p>Messages</p> */}
                <input
                    className="mt-2 w-full p-2 bg-slate-300"
                    placeholder={'ask something'}
                    value={input}
                    onChange={handleInputChange}
                />
                <Button className="mt-2 text-black bg-white border-2 hover:bg-slate-300 hover:text-white">Send Message</Button>
                {/* <button className="rounded-md border-2 border-blue-600 hover:bg-blue-600  transition-all p-2 mt-2">Send Message</button> */}
            </form>
            </div>


        </div>
    )
}   