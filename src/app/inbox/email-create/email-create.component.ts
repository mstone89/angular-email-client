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

    constructor() {
        this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: 'blahblah@angular-email.com'
        };
    }

    ngOnInit() {
    }
}
