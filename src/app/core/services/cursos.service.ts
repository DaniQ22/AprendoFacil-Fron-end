import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtilService } from './service-util.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl: string;

  constructor(private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:8080/api/curso/search/';

  }

  getCursosoByName(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + query)
  }
}




