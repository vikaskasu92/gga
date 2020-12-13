import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http:HttpClient) { }

  registerMember(registerRequest:any){
    return this.http.post<any>("https://globalgorsassociation.firebaseio.com/gga-members.json",registerRequest);
  }

  registerVolunteer(volunteerRequest:any){
    return this.http.post<any>("https://globalgorsassociation.firebaseio.com/gga-volunteers.json",volunteerRequest);
  }

}
