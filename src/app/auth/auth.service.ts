import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
    available: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    domain = 'https://api.angular-email.com';

    constructor(private http: HttpClient) { }

    usernameAvailable(username: string) {
        const url = `${this.domain}/auth/username`;
        return this.http.post<UsernameAvailableResponse>(url, { username });
    }
}
