import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private toastCtrl:ToastController) {  }

  validation_messages = {
    'username': [
        { type: 'required', message: 'Username is required.' }
      ],
      'password': [
        { type: 'required', message: 'Password is required.' }
      ],
      'invalidCredentials':[
        { type: 'wrongPassword', message: '' }
      ]
  }

  isLoggedIn:boolean = false;
  invalidLogin = new BehaviorSubject<boolean>(false);
  isValidLogin = this.invalidLogin.asObservable();
  validations = new BehaviorSubject<any>(this.validation_messages);
  validationMessage = this.validations.asObservable();

  login(email:string,password:string){
    return this.http.post<any>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVDjBV_9v9zcQGoBkfJnNIpJ8Ed--1QgU",{email:email,password:password,returnSecureToken:true}).subscribe( res => {
      this.invalidLogin.next(false);
      let email = res.email;
      let expiresTime = new Date().getTime() + +(res.expiresIn * 1000);
      let token = res.idToken;
      localStorage.setItem("ggaLogin",JSON.stringify({'email':email,'expiresIn':expiresTime,'token':token}));
      this.router.navigateByUrl("/admin");
    },error => {
      this.validation_messages.invalidCredentials[0]["message"] = error.error.error.message;
      console.log(this.validation_messages);
      this.validations.next(this.validation_messages);
      this.invalidLogin.next(true);  
      console.log("error ",error," message ",error.error.error.message);
    });
  }

  forgotPassword(email:string){
    return this.http.post<any>("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBVDjBV_9v9zcQGoBkfJnNIpJ8Ed--1QgU",{requestType:'PASSWORD_RESET',email:email}).subscribe( res => {
      this.toastCtrl.create({
        message:'Password reset email has been sent to'+email,
        duration:3000
      }).then( toast => {
        toast.present();
      })
    },error => {
      
    });
  }
  
}
