import { gerateShort } from "@utils/gerateRandom";

describe('Gerate Code', () => {
    it('Verify length code', () => {
        const code = gerateShort()
        const result = (code.length >= 5 && code.length <= 10) ? true: false;
       expect(result).toBe(true)
    })
})