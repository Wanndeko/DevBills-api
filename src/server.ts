import 'dotenv/config'
import express, { json } from 'express'
import { routes } from './routes'
import { setupMongo } from './database'
const port = 3333




setupMongo().then(()=>{
    const app = express()
    app.use(json())
    app.use(routes)
    app.listen(port,()=>console.log(`🚀 app is running at port ${port}`))
})


