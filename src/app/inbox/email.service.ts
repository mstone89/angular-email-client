import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface EmailSummary {
    id: string;
    subject: string;
    from: string;
}

interface Email {
    id: string;
    subject: string;
    text: string;
    to: string;
    from: string;
    html: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    rootUrl = 'https://api.angular-email.com';

    constructor(private http: HttpClient) { }

    getEmails() {
        const url = `${this.rootUrl}/emails`;
        return this.http.get<EmailSummary[]>(url);
    }

    getEmailById(id: string) {
        const url = `${this.rootUrl}/emails/${id}`;
        return this.http.get<Email>(url);
    }

    sendEmail() {

    }

}
