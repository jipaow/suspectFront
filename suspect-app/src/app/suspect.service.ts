import { Injectable } from '@angular/core';
import { Suspect } from './suspect';
import {  Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import 'rxjs/add/operator/do';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class SuspectService {

  private allSuspectUrl = 'http://localhost:8080/csi/suspects';
  private oneSuspectUrl = 'http://localhost:8080/csi/suspect';

  constructor(private http: HttpClient) { }

  selectedSuspect: Suspect;


  getAllSuspect(): Observable <Suspect[]> {
    return this.http.get<Suspect[]>(this.allSuspectUrl)
      .do(data => console.log('le do du service' + data));
  }

  getSuspect(id: number): Observable<Suspect> {
    const OneSuspectUrl = `${this.oneSuspectUrl}/${id}`;
    return this.http.get<Suspect>(OneSuspectUrl);
  }

  UpdateSuspect(suspect: Suspect): Observable<Suspect> {
    const OneSuspectUrl = `${this.oneSuspectUrl}/${suspect.id}`;
    return this.http.put<Suspect>(OneSuspectUrl, suspect, httpOptions).do(data2 => console.log('update ok ?' + data2));

  }

  postSuspect(suspect: Suspect): Observable<Suspect> {
    const OneSuspectUrl = `${this.oneSuspectUrl}`;
    return this.http.post<Suspect>(OneSuspectUrl, suspect, httpOptions);
  }

}
