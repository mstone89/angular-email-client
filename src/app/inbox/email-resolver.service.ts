import { EmailService } from './email.service';
import { Email } from './email';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

    constructor(private emailService: EmailService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params;

        return this.emailService.getEmailById(id);
    }
}
