import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private auth: AuthService) {}

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.signedin$.pipe(
            skipWhile(status => status === null),
            take(1)
        );
    }
}
