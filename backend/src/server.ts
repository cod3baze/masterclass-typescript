import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
dotenv.config({})

const app = express()

app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log(`RUNNING IN PORT: ${process.env.PORT || 3333}`))
