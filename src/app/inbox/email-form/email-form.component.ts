import { FormControl, FormGroup } from '@angular/forms';
import { Email } from './../email';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html',
    styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
    @Input() email: Email;
    emailForm: FormGroup;

    constructor() { }

    ngOnInit() {
        const { subject, from, to, text} = this.email;
        this.emailForm = new FormGroup({
            to: new FormControl(to),
            from: new FormControl(from),
            subject: new FormControl(subject),
            text: new FormControl(text)
        });
    }

}
