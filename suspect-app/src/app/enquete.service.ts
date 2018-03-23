import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class EnqueteService {

  private allEnqueteUrl = 'http://localhost:8080/csi/enquetes';
  private onenqueteUrl = 'http://localhost:8080/csi/enquete';

  constructor(private http: HttpClient) { }



}
