import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    signedin$: BehaviorSubject<boolean>;

    constructor(private auth: AuthService) {
        this.signedin$ = this.auth.signedin$;
    }

    ngOnInit() {
    }
}
