import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
    available: boolean;
}

interface SignupCredentials {
    username: string;
    password: string;
    passwordConfirmation: string;
}

interface SignupResponse {
    username: string;
}

interface SignedinResponse {
    authenticated: boolean;
    username: string;
}

interface SigninCredentials {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    rootUrl = 'https://api.angular-email.com';
    signedin$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    usernameAvailable(username: string) {
        const url = `${this.rootUrl}/auth/username`;
        return this.http.post<UsernameAvailableResponse>(url, { username });
    }

    signup(credentials: SignupCredentials) {
        const url = `${this.rootUrl}/auth/signup`;
        return this.http.post<SignupResponse>(url, credentials)
            .pipe(
                tap(() => {
                    this.signedin$.next(true);
                })
            );
    }

    checkAuthStatus() {
        const url = `${this.rootUrl}/auth/signedin`;
        return this.http.get<SignedinResponse>(url)
            .pipe(
                tap(({ authenticated }) => {
                    this.signedin$.next(authenticated);
                })
            );
    }

    signout() {
        const url = `${this.rootUrl}/auth/signout`;
        return this.http.post(url, {})
            .pipe(
                tap(() => {
                    this.signedin$.next(false);
                })
            );
    }

    signin(credentials: SigninCredentials) {
        const url = `${this.rootUrl}/auth/signin`;
        return this.http.post(url, credentials)
            .pipe(
                tap(() => {
                    this.signedin$.next(true);
                })
            );
    }
}
