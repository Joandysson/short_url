import { gerateShort, getRandomInt } from "@utils/gerateRandom";

describe('Gerate Code', () => {
    it('Verify length code', () => {
        const code = gerateShort()
        const result = (code.length >= 5 && code.length <= 10) ? true: false;
       expect(result).toBe(true)
    })

    it('Verify value number', () => {
        const number = getRandomInt(5, 10)
        const result = (number >= 5 && number <= 10) ? true: false;
       expect(result).toBe(true)
    })
})