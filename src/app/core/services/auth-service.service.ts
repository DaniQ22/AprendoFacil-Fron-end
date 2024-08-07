import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUtilService } from './service-util.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { loginModel } from '../Models/model-login';
import { User } from '../Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  emailUserLoggedIn: string = '';

  constructor(private http: HttpClient,
    private util_service: ServiceUtilService
  ) { }

  login(login: loginModel): Observable<any> {

    return this.http.post<any>(`${this.util_service.url}api/auth/login`, login, {observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          console.log('Respuesta del servidor:', response);
          const bearerToken = response.headers.get('Authorization') || '';
          const token = bearerToken.replace('Bearer ', '');
          this.emailUserLoggedIn = response.body.message; // Asegúrate de que el cuerpo de la respuesta contiene el mensaje esperado
          if (this.emailUserLoggedIn) {
            localStorage.setItem('userEmail', this.emailUserLoggedIn);
          }
          if (token) {
            localStorage.setItem('token', token);
          }
          return response.body;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error en la solicitud de inicio de sesión:', error);
          const errorMessage = error.error?.message || 'Error desconocido';
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  registerStudent(user: User): Observable<any>{
    return this.http.post<any>(this.util_service.url + 'api/auth/register-student', user);
  }
}
