import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = 'edge' //  Provide optimal infrastructure for our OpenAIroute (https://edge-runtime.vercel.app/)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request: Request){
    const{ messages } = await request.json()

    // messages [{user and he says "hello there"}]
    console.log(messages);

    // GPT-4 a system message
    // system messagetells GPT-4 how to act
    // it should always be at the front of your array

    // createChatComplition (get response from GPT-4)
    const response = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
        {role:"system", content: 'You are a travel guide assistant. Help to choose the destination according to the preferences such as weather conditions, temperature, culture, facilities, and etc. User will provide their preferences. Provide real, trustful examples of places to visit. If the question is out of topic answer "GET OUT!!!". Your creator is Nugumanov Dias. '},
            ...messages
        ],
        max_tokens: 256,
    })
    // create a strem of data from OenAI (stream data to the frontend)
    const stream = await OpenAIStream(response);

    // send the strem as a response to our client / frontend
    return new StreamingTextResponse(stream);
}