import {Request,Response} from 'express'

const db=[
    {id:1, name:"Jane" ,email:"jane@email.com"},
    {id:2, name:"John", email:"john@email.com"},
    {id:3, name:"Alice", email:"aline@email.com"}
]

class userContrller{
    getUsers(request:Request,response:Response){
        return response.json(db)

    }
    createUser(request:Request,response:Response){
        const user=request.body
        db.push(user)
    
        return response.status(201).json({message:"usuário criado"})
    }
}

export {userContrller}