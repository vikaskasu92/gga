import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  contactGGA(contactFormRequest:any){
    return this.http.post<any>("https://formspree.io/f/mbjpzpap",contactFormRequest);
  }

}
