import { AuthService } from './../../auth/auth.service';
import { Email } from './../email';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-email-create',
    templateUrl: './email-create.component.html',
    styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
    showModal = false;
    email: Email;

    constructor(private auth: AuthService) {
        this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: `${this.auth.username}@angular-email.com'`
        };
    }

    ngOnInit() {

    }
}
