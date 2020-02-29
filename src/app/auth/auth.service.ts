import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    constructor(private http: HttpClient) { }

    usernameAvailable(username: string) {
        const url = `${this.rootUrl}/auth/username`;
        return this.http.post<UsernameAvailableResponse>(url, { username });
    }

    signup(credentials: SignupCredentials) {
        const url = `${this.rootUrl}/auth/signup`;
        return this.http.post<SignupResponse>(url, credentials);
    }
}
