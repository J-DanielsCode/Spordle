import { poundToKilos } from "../src/utils/conversions";


describe("poundToKilos", () => {
    test("divides the pounds by 2.2 and rounds up to the nearest integer", () => {
        //setup
        const expectedRes = 1;
        
        //exercise
        const actualRes = poundToKilos("2.2");

        //verify
        expect(actualRes).toBe(expectedRes);
        //teardown
    })
})