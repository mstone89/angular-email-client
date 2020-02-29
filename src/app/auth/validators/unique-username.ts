import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
    constructor(private auth: AuthService) {}

    validate = (control: FormControl) => {
        const { value } = control;

        return this.auth.usernameAvailable(value)
            .pipe(
                // tslint:disable-next-line: no-shadowed-variable
                map((value) => {
                    if (value.available) {
                        return null;
                    }
                }),
                catchError((err) => {
                    if (err.error.username) {
                        return of({ nonUniqueUsername: true });
                    } else {
                        return of({ noConnection: true });
                    }
                })
            );
    }
}
