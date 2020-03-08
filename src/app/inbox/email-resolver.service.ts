import { catchError } from 'rxjs/operators';
import { EmailService } from './email.service';
import { Email } from './email';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

    constructor(
        private emailService: EmailService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params;

        return this.emailService.getEmailById(id)
            .pipe(
                catchError(() => {
                    this.router.navigateByUrl('/inbox/not-found');
                    return EMPTY;
                })
            );
    }
}
