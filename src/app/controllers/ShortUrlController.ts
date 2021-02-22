import ShortUrl from "@models/ShortUrl";
import { Request, Response } from "express";
import { } from "typeorm";

class ShortUrlController {
    async index() {

    }

    async store(request: Request, response: Response) {
        try {
            // const insertShortUrl = ShortUrl.create({})

            // const shortUrl = await insertShortUrl.save();

            response.sendStatus(200);
        } catch (error) {
            console.log(error.message)
            response.json({ error: error.message }).sendStatus(500);
        }
    }
}

export default new ShortUrlController;