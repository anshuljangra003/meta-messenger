// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../redis'
import { Message } from '../../typings'
type ErrorData = {
  body: string
}
type Data={
    message:Message;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
    if(req.method!=="POST"){
        res.status(405).json({
            body:"Wrong method"
        })
        return;
    
    }

    const {message}= req.body
    const newMessage={
        ...message,
        created_at:Date.now()
    }
    await redis.hset('messages',message.id,JSON.stringify(newMessage))
  res.status(200).json( {message: newMessage} )
}
