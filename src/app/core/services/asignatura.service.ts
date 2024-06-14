import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtilService } from './service-util.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http: HttpClient,
    private utilService: ServiceUtilService
  ) { }


  getAsignature(): Observable<any[]> {
    return this.http.get<any[]>(this.utilService.url + 'api/asignatura/all');
  }
}
