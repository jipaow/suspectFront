import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Enquete } from './enquete';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EnqueteService {

  private allEnqueteUrl = 'http://localhost:8080/csi/enquetes';
  private oneEnqueteUrl = 'http://localhost:8080/csi/enquete';

  constructor(private http: HttpClient) { }

  getAllEnquete(): Observable<Enquete[]> {
    return this.http.get<Enquete[]>(this.allEnqueteUrl)
      .do(data => console.log('le do du service' + data));
  }

  getEnquete(numeroDossier: number): Observable<Enquete> {
  const OneEnquetetUrl = `${this.oneEnqueteUrl}/${numeroDossier}`;
  return this.http.get<Enquete>(OneEnquetetUrl);
  }

  postEnquete(enquete: Enquete): Observable<Enquete> {
    const OneEnqueteUrl = `${this.oneEnqueteUrl}`;
    return this.http.post<Enquete>(OneEnqueteUrl, enquete, httpOptions).do(data => console.log('post ok?' + data));
}
  updateEnquete(enquete: Enquete): Observable<Enquete> {
  const OneEnqueteUrl = `${this.oneEnqueteUrl}/${enquete.numeroDossier}`;
  return this.http.put<Enquete>(OneEnqueteUrl, enquete, httpOptions).do(data2 => console.log('update ok ?' + data2));
}
}
