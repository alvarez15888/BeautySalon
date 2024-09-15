import express from 'express'
import ColabsControllers from '../controllers/colabs.js'

const colabsRouter = express.Router()
const colabsControllers = new ColabsControllers()

colabsRouter.get('/', async (req, res) => {
    const { body, success, statusCode } = await colabsControllers.getColabs()

    res.status(statusCode).send({ body, success, statusCode })
})

colabsRouter.post('/', async (req, res) => {
    const { body, success, statusCode } = await colabsControllers.addColab(req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

colabsRouter.delete('/:id', async (req, res) => {
    const { body, success, statusCode } = await colabsControllers.deleteColab(req.params.id)

    res.status(statusCode).send({ body, success, statusCode })
})

colabsRouter.put('/:id', async (req, res) => {
    const { body, success, statusCode } = await colabsControllers.updateColab(req.params.id, req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

colabsRouter.get('/availables', async (req, res) => {
    const { body, success, statusCode } = await colabsControllers.getAvailableColabs()

    res.status(statusCode).send({ body, success, statusCode })
})

export default colabsRouter 