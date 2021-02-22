import ShortUrl from "@models/ShortUrl";
import { gerateShortURLValid } from "@utils/gerateRandom";
import { IEnv } from '@interfaces/IEnv';
import { Request, Response } from "express";
import { renderShortUrl } from "@views/short_url";

class ShortUrlController {
    async index(request: Request, response: Response) {

        const existsCode = await ShortUrl.varifyURLCode(request.params.code);

        if(existsCode.length > 0) return response.redirect(existsCode[0].redirect);

        response.sendStatus(404);

    }

    async store(request: Request, response: Response) {
        const { HOST, PORT } = process.env as IEnv;
        try {

            const code = await gerateShortURLValid()

            const insertShortUrl = ShortUrl.create({
                url: `${HOST}:${PORT}/${code}`,
                redirect: request.body.url,
                code: code
            })
            insertShortUrl.save();

            response.json(renderShortUrl(insertShortUrl)).status(201);
        } catch (error) {
            response.json({ error: error.message }).sendStatus(500);
        }
    }
}

export default new ShortUrlController;