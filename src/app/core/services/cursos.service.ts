import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtilService } from './service-util.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl: string;

  constructor(private http: HttpClient,
    private utilService: ServiceUtilService
  ) {
    this.baseUrl = 'http://localhost:8080/api/curso/search/';

  }

  getCursosoByName(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + query)
  }

  getAllCursos():Observable<any[]>{
    return this.http.get<any[]>(this.utilService.url + 'api/curso/all');
  }

  saveCourse(formData: FormData) :Observable<any>{
    return this.http.post(this.utilService.url + 'api/curso/save', formData)
  }

  getCourseById(id: number):Observable<any>{
    return this.http.get(this.utilService.url + 'api/curso/get-by-id/' + id);
  }
}




