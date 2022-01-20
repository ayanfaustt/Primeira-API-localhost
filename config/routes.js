import express from 'express';

const routes = express.Router()

let database = [
    {"1":{Nome:'Cliente 1', Idade:'20'}},
    {"2":{Nome:'Cliente 2', Idade:'44'}},
    {"3":{Nome:'Cliente 3', Idade:'72'}},
    {"4":{Nome:'Cliente 4', Idade:'30'}},
]

routes.get('/',(req,res)=>{
    return res.json(database)
})

routes.post('/add', (req,res)=>{
    const body = req.body

    if(!body){
        return res.status(400).end()
    }
    database.push(body)
    return res.json(body)
})

export default routes