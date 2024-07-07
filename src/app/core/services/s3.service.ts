import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUtilService } from './service-util.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S3Service {



  constructor(private http: HttpClient,
    private utilService: ServiceUtilService
  ) { }

  getUrlFileS3(key: String):Observable<string>{
    return this.http.get<string>(this.utilService + 'api/s3/get-doc' + key);
  }

}
