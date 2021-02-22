import { NextFunction, Request, Response } from "express";
import * as Yup from 'yup';

export async function validStore(resquest: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
        url: Yup.string().url('URL invalída').required('Url é obrigatória.'),
    });

    await schema.validate(resquest.body, {
        abortEarly: false,
    });

    next();
}