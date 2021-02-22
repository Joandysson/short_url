import { Router } from 'express'
import shortUrlController from "@controllers/ShortUrlController";

const routers = Router();

routers.get('/', (request, response) => {
    return response.status(200).send('Api bank api V1.0.0')
});

routers.post('/encurtador', shortUrlController.store)

export default routers;