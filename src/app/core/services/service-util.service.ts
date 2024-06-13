import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtilService {

  private showTableCourse: boolean = true;


  constructor() { }

  url: string = "http://localhost:8080/";

  handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud HTTP:', error);
    const errorMessage = error.error.message || 'Error desconocido';
    return throwError(() => new Error(errorMessage));
  }


  setShowTableCourse(): void {
    this.showTableCourse = false;
    console.log(this.showTableCourse);
  }

  getShowTableCourse(): boolean {
    return this.showTableCourse;
    console.log(this.showTableCourse);
  }
}
