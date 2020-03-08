import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    authForm = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            Validators.pattern(/^[a-zA-Z0-9]*$/)
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
        ])
    });

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    onSigninSubmit() {
        if (this.authForm.invalid) {
            return;
        }

        this.auth.signin(this.authForm.value).subscribe({
            next: () => {
                this.router.navigateByUrl('/inbox');
            },
            error: ({ error }) => {
                if (error.username || error.password) {
                    this.authForm.setErrors({ credentials: true });
                }
            }
        });
    }
}
