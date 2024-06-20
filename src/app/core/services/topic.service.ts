import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtilService } from './service-util.service';
import { Tema } from '../Models/model-tema';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient,
    private utilService: ServiceUtilService
  ) { }

  saveTopic(formData: FormData): Observable<any>{
    return this.http.post(this.utilService.url + 'api/tema/save', formData);
  }

  
  getByTopicByCourse(idCourse: number): Observable<Tema[]>{
    return this.http.get<Tema[]>(this.utilService.url + 'api/tema/get-by-id-course/' + idCourse);
  }


  getTopicById(idTopic: number):Observable<Tema>{
    return this.http.get<Tema>(this.utilService.url + 'api/tema/get-by-id/' + idTopic);
  }
}
