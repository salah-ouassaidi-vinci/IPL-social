import { Email } from "./Email";
describe('Email', () => {
    const email = new Email();
    describe('a. @ validation', () => {
        it("should return true when given an email with @", () => {
            const actual = email.isValid("salah@gmail.com");

            expect(actual).toBe(true);
        }); 
    });
    describe('c. no spaces validation', () => {
        it("should return false if email contains a space", () => {
            const actual = email.isValid("salah@ gmail.com");
            expect(actual).toBe(false);
        });
    });
});