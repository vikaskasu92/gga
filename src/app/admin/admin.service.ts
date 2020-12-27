import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

interface Newsdata {
  title:string,
  description:string,
  date:string
}

interface Membership {
  firstName:string,
  lastName:string,
  email:string,
  phone:string,
  country:string,
  state:string,
  city:string,
  countryOrigin:string,
  stateOrigin:string,
  cityOrigin:string
}

interface Volunteer {
  firstName:string,
  lastName:string,
  email:string,
  phone:string,
  country:string,
  state:string,
  city:string
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  validation_messages = {
    'title': [
        { type: 'required', message: 'Title is required.' }
      ],
      'description': [
        { type: 'required', message: 'Description is required.' }
      ]
  }

  validations = new BehaviorSubject<any>(this.validation_messages);
  validationMessage = this.validations.asObservable();

  addNewsToDB(title:string,description:String,date:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.post<any[]>("https://globalgorsassociation.firebaseio.com/news-content.json?auth="+loggedInUser.token,{title:title,description:description,date:date}).pipe( tap(resData => {
    }));
  }

  fetchNews(){
    return this.http.get<{[key:string] :Newsdata}>("https://globalgorsassociation.firebaseio.com/news-content.json").pipe(
      map(resData => {
        const news = [];
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            news.push({id:key,title:resData[key].title,description:resData[key].description,date:resData[key].date});
          }
        }
        return news;
      })
    )
  }

  fetchMembers(){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.get<{[key:string] :Membership}>('https://globalgorsassociation.firebaseio.com/gga-members.json?auth='+loggedInUser.token).pipe(
      map(resData => {
        const members = [];
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            members.push({id:key,firstName:resData[key].firstName,lastName:resData[key].lastName,email:resData[key].email,phone:resData[key].phone,country:resData[key].country,state:resData[key].state,city:resData[key].city,countryOrigin:resData[key].countryOrigin,stateOrigin:resData[key].stateOrigin,cityOrigin:resData[key].cityOrigin});
          }
        }
        return members;
      })
    );
  }

  fetchVolunteers(){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.get<{[key:string] :Volunteer}>('https://globalgorsassociation.firebaseio.com/gga-volunteers.json?auth='+loggedInUser.token).pipe(
      map(resData => {
        const volunteers = [];
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            volunteers.push({id:key,firstName:resData[key].firstName,lastName:resData[key].lastName,email:resData[key].email,phone:resData[key].phone,country:resData[key].country,state:resData[key].state,city:resData[key].city});
          }
        }
        return volunteers;
      })
    );
  }

  deleteNewsOnDB(id:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.delete('https://globalgorsassociation.firebaseio.com/news-content/'+id+'.json?auth='+loggedInUser.token).pipe( tap(resData => {
    }));
  }

  deleteMembersOnDB(id:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.delete('https://globalgorsassociation.firebaseio.com/gga-members/'+id+'.json?auth='+loggedInUser.token).pipe( tap(resData => {
    }));
  }

  deleteVolunteersOnDB(id:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.delete('https://globalgorsassociation.firebaseio.com/gga-volunteers/'+id+'.json?auth='+loggedInUser.token).pipe( tap(resData => {
    }));
  }


  editNewsOnDB(id:string,title:string,description:string,date:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.put('https://globalgorsassociation.firebaseio.com/news-content/'+id+'.json?auth='+loggedInUser.token,{description:description,title:title,date:date}).pipe( tap(resData => {
    }));
  }

  editMembersOnDB(id:string,title:string,description:string,date:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.put('https://globalgorsassociation.firebaseio.com/news-content/'+id+'.json?auth='+loggedInUser.token,{description:description,title:title,date:date}).pipe( tap(resData => {
    }));
  }

  editVolunteersOnDB(id:string,title:string,description:string,date:string){
    let loggedInUser = JSON.parse(localStorage.getItem("ggaLogin"));
    return this.http.put('https://globalgorsassociation.firebaseio.com/news-content/'+id+'.json?auth='+loggedInUser.token,{description:description,title:title,date:date}).pipe( tap(resData => {
    }));
  }

}
