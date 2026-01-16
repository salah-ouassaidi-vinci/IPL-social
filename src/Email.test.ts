import { Email } from "./Email";
describe('Email', () => {
    const email = new Email();
    describe('a. @ validation', () => {
        it("should return true when given an email with @", () => {
            const actual = email.isValid("salah@gmail.com");

            expect(actual).toBe(true);
        }); 
        it("should return false when given an email without @", () => {
            const actual = email.isValid("salahgmail.com");

            expect(actual).toBe(false);
        });
    });

    describe('c. no spaces validation', () => {
        it("should return false when given an email with a space", () => {
            const actual = email.isValid("salah@ gmail.com");

            expect(actual).toBe(false);
        });
        it("should return true when given an email with no space", () => {
            const actual = email.isValid("salah@gmail.com");

            expect(actual).toBe(true);
        });
    });
});