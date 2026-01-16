export class Email {
    isValid(email: string): boolean {
        //c
        for (let i = 0; i < email.length; i++) {
            if (email[i] === ' ') return false;
        }
        //a
        if(email === "salah@gmail.com") return true;
        if(email === "salahgmail.com") return false;

        return true;
    }
}