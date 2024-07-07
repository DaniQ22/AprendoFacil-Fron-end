import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private route: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status !== 200) {
                    console.log('Error interceptado:', err);
                    // Relanzar el error para que sea manejado en otro lugar
                }

                // Mostrar mensaje de error específico si está disponible
                if (err.error && err.error.message) {
                    console.log("Error: " + err.error.message);
                } else {
                    console.log("Error: " + err.message);
                }

                // if(err.status === 401){
                // this.route.navigate(['/admin'])
                // alert("Usted no esta authorizado")
                // localStorage.clear();
                // }

                return throwError(() => err);

            })
        );
    }
}