import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http:HttpClient) { }

  countries:string[] = ["Australia","Canada","India","Middle East","United Kingdom","United States of America"];

  countriesWithoutIndia:string[] = ["Australia","Canada","Middle East","United Kingdom","United States of America"];

  usaStates:string[] = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming","District of Columbia"];

  australiaStates:string[] = ["New South Wales","Queensland","South Australia","Tasmania","Victoria","Western Australia","Australian Capital Territory","Jervis Bay Territory","Northern Territory","Ashmore and Cartier Islands","Australian Antarctic Territory","Christmas Island","Cocos (Keeling) Islands","Coral Sea Islands","Heard Island and McDonald Islands","Norfolk Island"];

  canadaStates:string[] = ["Ontario","Quebec","Nova Scotia","New Brunswick","Manitoba","British Columbia","Prince Edward Island","Saskatchewan","Alberta","Newfoundland and Labrador","Northwest Territories","Yukon","Nunavut"];

  indiaStates:string[] = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"];

  ukStates:string[] = ["Scotland","Northern Ireland","Wales","North East","North West","Yorkshire and the Humber","West Midlands","East Midlands","South West","South East","East of England","Greater London"];

  middleEastStates:string[] = ["Bahrain","Cyprus","Egypt","Iran","Iraq","Israel","Jordan","Kuwait","Lebanon","Oman","Palestine","Qatar","Saudi Arabia","The Syrian Arab Republic","Turkey","The United Arab Emirates","Yemen"];
  
  registerMember(registerRequest:any){
    return this.http.post<any>("https://globalgorsassociation.firebaseio.com/gga-members.json",registerRequest);
  }

  registerVolunteer(volunteerRequest:any){
    return this.http.post<any>("https://globalgorsassociation.firebaseio.com/gga-volunteers.json",volunteerRequest);
  }

}
