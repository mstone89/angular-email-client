import { EmailService } from './../email.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-email-show',
    templateUrl: './email-show.component.html',
    styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
    email;

    constructor(
        private route: ActivatedRoute,
        private emailService: EmailService
    ) { }

    ngOnInit() {
        this.route.params.pipe(
            switchMap(({ id }) => {
                return this.emailService.getEmailById(id);
            })
        ).subscribe((email) => {
            console.log(email);
            this.email = email;
        });
    }

}
