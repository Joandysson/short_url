import request from 'supertest';
import { IEnv } from '@interfaces/IEnv';
import { gerateShortURLValid } from '@utils/gerateRandom';
import ShortUrl from "@models/ShortUrl";
import '@database/connect';

require('dotenv').config()


describe('ShortUrl', () => {
   const { HOST, PORT } = process.env as IEnv;
   const baseUrl = `${HOST}:${PORT}`;

   it('you should check the return of the valid URL', async () => {
      const response = await request(baseUrl)
         .post('/encurtador')
         .send({ "url": "http://sll.com" })

      expect(response.status).toBe(201)
   })

   it('you should check the return of the invalid URL', async () => {
      const response = await request(baseUrl)
         .post('/encurtador')
         .send({ "url": "httpll.com" })

      expect(response.status).toBe(400)
   })

   it('you should check the return 404', async () => {
      const response = await request(baseUrl).get('/sadfas')

      expect(response.status).toBe(404)
   })

   it('you should check return a status redirect', async () => {

      const response = await request(baseUrl)
         .post('/encurtador')
         .send({ "url": "http://sll.com" })

      const response2 = await request(response.body.newUrl).get('')

      expect(response2.status).toBe(302)
   })

   it('you should check code valid', async () => {
      const code = await gerateShortURLValid();

      const valid = await ShortUrl.varifyURLCode(code);

      expect(valid.length).toBe(0)
   })
})