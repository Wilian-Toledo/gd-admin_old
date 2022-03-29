import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from "ngx-webstorage";
import { Keys } from '../models/keys';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(
        private toast: ToastrService,
        private sessionStorageService: SessionStorageService,
        private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.sessionStorageService.retrieve(Keys.Auth);

        if (!token) {
            return next.handle(req.clone({ url: this.fixUrl(req.url) })).pipe(
                map(event => {
                    if (event instanceof HttpResponse && event.body.content) {
                        return event.clone({ body: event.body.content });
                    }
                    return event;
                }),
                catchError((res) => {
                    switch (res.status) {
                        case 401:
                        case 403:
                        case 400:
                            this.badRequest(res);
                            break;
                        case 500:
                            this.internalServerError(res);
                    }

                    return throwError(res);
                }));
        }
        else
        {
            const clonedRequest = req.clone({
				headers: req.headers
				.set('Authorization', `Bearer ${token}`),
                url: this.fixUrl(req.url)
            });

            return next.handle(clonedRequest).pipe(
                map(event => {
                    if (event instanceof HttpResponse && event.body.content) {
                        return event.clone({ body: event.body.content });
                    }
                    return event;
                }),
                catchError((res) => {
                    switch (res.status) {
                        case 401:
                        case 403:
                        case 400:
                            this.badRequest(res);
                            break;
                        case 500:
                            this.internalServerError(res);
                    }

                    return throwError(res);
                }));
        }
    }

    private badRequest(res: Response) {
        if (res instanceof HttpErrorResponse) {
            if (res.status == 401)
            {
                this.authService.logout();
            }
            if (res.error && res.error.messages) {
                this.toast.error(res.error.messages[0].text, "Atenção");
            }
        }
    }

    private internalServerError(res: Response) {
        if (res instanceof HttpErrorResponse) {
            this.toast.error("Estamos com problemas no momento tente novamente", "Atenção");
        }
    }

    private fixUrl(url: string) {
        if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0)
            return url;
        else
            return environment.endpoint + url;
    }
}