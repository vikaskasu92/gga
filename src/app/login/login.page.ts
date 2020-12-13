import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AdminPage } from '../admin/admin.page';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalCtrl:ModalController,
            private authService:AuthService,
            private router:Router) { }

  loginForm:FormGroup;
  validation_messages:any;
  invalidLogin:boolean;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required])
    });
   this.authService.validationMessage.subscribe( value => {
    this.validation_messages = value;
   })
    this.authService.isValidLogin.subscribe( value => {
      this.invalidLogin = value;
    });
  }

  closeLogin(){
    this.modalCtrl.dismiss();
  }

  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value);
    }
    
  }

  forgotPassword(event:any){
      event.preventDefault();
      this.authService.forgotPassword(this.loginForm.controls.username.value);
  }

}
