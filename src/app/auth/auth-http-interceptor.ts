import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // modify or log outgoing request
        const modifiedReq = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedReq);
            // .pipe(
            //     tap((value) => {
            //         if (value.type === HttpEventType.Sent) {
            //             console.log('request was sent to server');
            //         }

            //         if (value.type === HttpEventType.Response) {
            //             console.log('got a response', value);
            //         }
            //     })
            // );
    }
}
