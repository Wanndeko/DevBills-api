import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'

import { routes } from './routes'
import { setupMongo } from './database'
import { errorHandler } from './middlewares/error-handler.middleware'
const port = 3333




setupMongo().then(()=>{
    const app = express()

    app.use(cors({
        origin: process.env.FRONT_URL
    }))
    app.use(json())
    app.use(routes)
    app.use(errorHandler)
    app.listen(port,()=>console.log(`🚀 app is running at port ${port}`))
})


