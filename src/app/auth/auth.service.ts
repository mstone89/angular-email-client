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
        return this.http.post<SignupResponse>(url, credentials, {
            withCredentials: true
        }).pipe(
            tap(() => {
                this.signedin$.next(true);
            })
        );
    }

    checkAuthStatus() {
        const url = `${this.rootUrl}/auth/signedin`;
        return this.http.get(url, {
            withCredentials: true
        }).pipe(
            tap((response) => {
                console.log(response);
            })
        );
    }
}
