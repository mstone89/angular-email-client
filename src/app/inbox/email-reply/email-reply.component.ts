import { EmailService } from './../email.service';
import { Email } from './../email';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-email-reply',
    templateUrl: './email-reply.component.html',
    styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnChanges {
    showModal = false;
    @Input() email: Email;

    constructor(private emailService: EmailService) { }

    ngOnChanges() {
        const replaceNewlines = this.email.text.replace(/\n/gi, '\n> ');
        const finalText = `\n\n\n-------- ${this.email.from} wrote:\n> ${replaceNewlines}`;

        this.email = {
            ...this.email,
            from: this.email.to,
            to: this.email.from,
            subject: `RE:${this.email.subject}`,
            text: finalText,
            html: finalText
        };
    }

    onSubmit(email: Email) {
        this.emailService.sendEmail(email).subscribe(() => {
            this.showModal = false;
        });
    }
}
