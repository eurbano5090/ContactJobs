import express from 'express'
import cors from 'cors'

import ContactRouter from './routes/contact'

const app =express()
app.use(express.json())// middleware que transforma la req a un json
app.use(cors())

const PORT=9097

app.get('/ping' , (_req,res)=>{
    console.log('someone pinged here!')
    res.send('pong')
    
})

app.use('/api/',ContactRouter)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})