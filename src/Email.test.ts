import { Email } from "./Email";
describe('Email', () => {
    describe('@ validation', () => {
        const email = new Email();
        it("should return true when given an email with @", () => {
            const actual = email.isValid("salah@gmail.com");

            expect(actual).toBe(true);
        })
        
    })

})