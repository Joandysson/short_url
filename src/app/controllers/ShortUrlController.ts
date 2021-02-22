import ShortUrl from "@models/ShortUrl";
import { gerateShortURLValid } from "@utils/gerateRandom";
import { IEnv } from '@interfaces/IEnv';
import { Request, Response } from "express";
import { renderShortUrl } from "@views/short_url";

class ShortUrlController {
    async index(request: Request, response: Response) {

        const existsCode = await ShortUrl.varifyURLCode(request.params.code);

        if (existsCode.length > 0) return response.status(302).redirect(existsCode[0].redirect);

        response.sendStatus(404);

    }

    async store(request: Request, response: Response) {
        const { HOST, PORT } = process.env as IEnv;

        const existsShort = await ShortUrl.findOne({ redirect: request.body.url}, {order: {createdAt: "DESC"}});
        if (existsShort) {
            const isValid = await ShortUrl.varifyURLCode(existsShort.code)
            if(isValid) return response.status(201).json(renderShortUrl(existsShort));
        }

        try {
            const code = await gerateShortURLValid()

            const insertShortUrl = ShortUrl.create({
                url: `${HOST}:${PORT}/${code}`,
                redirect: request.body.url,
                code: code
            })
            insertShortUrl.save();

            response.status(201).json(renderShortUrl(insertShortUrl));
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

export default new ShortUrlController;