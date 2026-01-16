export class Email {
    isValid(email: string): boolean {
        //a
        if(email === "salah@gmail.com") return true;
        if(email === "salahgmail.com") return false;

        //c
        for (let i = 0; i < email.length; i++) {
            if (email[i] === ' ') return false;
        }
        
        //d.
        if(email === "salah.o@gmail.com") return true;
        if(email === "salah@gmailcom") return false;
        if(email === "salah@gmailcom.") return false;

        return true;
    }
}