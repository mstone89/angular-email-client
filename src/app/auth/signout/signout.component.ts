import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
    selector: 'app-signout',
    templateUrl: './signout.component.html',
    styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit() {
        this.auth.signout().subscribe(() => {
            // navigate back to sign in or other component
            // or success message
        });
    }

}
