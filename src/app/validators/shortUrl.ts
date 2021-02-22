import { NextFunction, Request, Response } from "express";
import * as Yup from 'yup';

export async function validStore(resquest: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
        url: Yup.string().url('URL invalid').required('Url is required.'),
    });

    await schema.validate(resquest.body, {
        abortEarly: false,
    });

    next();
}

export async function validCode(resquest: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
        code: Yup.string().max(10, 'short url bigggert than 10').min(5, 'short url less than 10').required('Url code is required'),
    });

    await schema.validate(resquest.params, {
        abortEarly: false,
    });

    next();
}