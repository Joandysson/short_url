import { Router } from 'express'
import shortUrlController from "@controllers/ShortUrlController";
import { validStore } from '@validators/shortUrl';

const routers = Router();

routers.get('/', (request, response) => {
    return response.status(200).send('Api bank api V1.0.0')
});

routers.post('/encurtador', validStore, shortUrlController.store)

export default routers;