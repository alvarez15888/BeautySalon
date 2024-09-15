import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import { config } from 'dotenv'
import authRouter from './auth/auth.js'
import usersRouter from './routes/users.js'
import colabsRouter from './routes/colabs.js'
import ordersRouter from './routes/orders.js'

config()

async function main () {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    const mongoConnection = await Mongo.connect({
        mongoConnectionString: process.env.MONGO_CS,
        mongoDbName: process.env.MONGO_DB_NAME})
    console.log(mongoConnection)

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to Beauty Salon!'
        })
    })

    // routes
    app.use('/auth', authRouter)
    app.use('/users', usersRouter)
    app.use('/colabs', colabsRouter)
    app.use('/orders', ordersRouter)

    app.listen(port, () => {
        console.log(`Server runnig on: http://${hostname}:${port}`)
    })
}

main()