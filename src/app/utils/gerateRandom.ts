import ShortUrl from "@models/ShortUrl";
import { LessThan } from "typeorm";

export function getRandomInt(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function gerateShort() : string {
    return Math.random().toString(36).substring(2, 15).substr(0,  getRandomInt(5, 10))
}

export async function gerateShortURLValid() : Promise<string> {
    const code = gerateShort()
    const existsCode = await ShortUrl.varifyURLCode(code);

    if(existsCode) {
        gerateShortURLValid()
    }

    return code;
}
