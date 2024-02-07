import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GridInput, RequestParams} from '../model/model'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getUser(user: RequestParams): Observable<GridInput> {
    return this.http.post<GridInput>('https://email.convergentechnologies.com/search/email',user);
  }
}