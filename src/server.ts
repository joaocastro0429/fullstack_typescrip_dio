import express, { response } from 'express'

const server=express()

server.use(express.json())

server.get("/users",(request, response)=>{
    return response.json({message:"dioBlanck API"})
})

server.post("/user",(request,response)=>{
    const body=request.body
    console.log(body)
    return response.status(201).json({message:"usuário criado"})
})


server.listen(5555,()=>console.log('running run server'))