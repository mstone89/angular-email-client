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

interface SigninResponse {
    username: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    rootUrl = 'https://api.angular-email.com';
    signedin$ = new BehaviorSubject(null);
    username = '';

    constructor(private http: HttpClient) { }

    usernameAvailable(username: string) {
        const url = `${this.rootUrl}/auth/username`;
        return this.http.post<UsernameAvailableResponse>(url, { username });
    }

    signup(credentials: SignupCredentials) {
        const url = `${this.rootUrl}/auth/signup`;
        return this.http.post<SignupResponse>(url, credentials)
            .pipe(
                tap((response) => {
                    this.signedin$.next(true);
                    this.username = response.username;
                })
            );
    }

    checkAuthStatus() {
        const url = `${this.rootUrl}/auth/signedin`;
        return this.http.get<SignedinResponse>(url)
            .pipe(
                tap(({ authenticated, username }) => {
                    this.signedin$.next(authenticated);
                    this.username = username;
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
        return this.http.post<SigninResponse>(url, credentials)
            .pipe(
                tap((response) => {
                    this.signedin$.next(true);
                    this.username = response.username;
                })
            );
    }
}
