import express, { response } from 'express'
import { userContrller } from './controllers/userController'



const server=express()

server.use(express.json())

const userControllers=new userContrller

server.get("/users",userControllers.getUsers)

server.post("/user",userControllers.createUser)


server.listen(5555,()=>console.log('running run server'))