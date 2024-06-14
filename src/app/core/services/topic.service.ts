import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtilService } from './service-util.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient,
    private utilService: ServiceUtilService
  ) { }

  saveTopic(dataTopic: any): Observable<any>{
    return this.http.post(this.utilService.url + 'api/tema/save', dataTopic);
  }

  getByTopicByCourse(idCourse: number): Observable<>
}
