import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private memberService:MembershipService,
    private toastCtrl:ToastController) { }

  registerForm:FormGroup;
  countries:string[] = [];
  states:string[] = [];
  ukSelected:boolean = false;
  middleEastSelected:boolean = false;

  ngOnInit() {
    this.countries = this.memberService.countries;
    this.registerForm = new FormGroup({
      'title': new FormControl(null),
      'firstName': new FormControl(null,[Validators.required]),
      'lastName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email]),
      'phone': new FormControl(null,[Validators.required]),
      'profession': new FormControl(null),
      'interestHobbies': new FormControl(null),
      'addressline1': new FormControl(null),
      'addressline2': new FormControl(null),
      'country': new FormControl(null),
      'state': new FormControl(null),
      'city': new FormControl(null),
      'zip': new FormControl(null)
    });
    this.registerForm.controls.state.disable();
  }

  countryChanged(event:any){
    this.registerForm.controls.state.enable();
    this.states = [];
    this.ukSelected = false;
    this.middleEastSelected = false;
    switch(event.value){
      case "Australia":{
        this.states = this.memberService.australiaStates;
        break;
      }
      case "Canada":{
        this.states = this.memberService.canadaStates;
        break;
      }
      case "India":{
        this.states = this.memberService.indiaStates;
        break;
      }
      case "United Kingdom":{
        this.ukSelected = true;
        this.states = this.memberService.ukStates;
        break;
      }
      case "Middle East":{
        this.middleEastSelected = true;
        this.states = this.memberService.middleEastStates;
        break;
      }
      case "United States of America":{
        this.states = this.memberService.usaStates;
        break;
      }
    }
  }

  register(){
    if(this.registerForm.valid){
    let registerRequest:any = {};
    registerRequest.title = this.registerForm.controls.title.value;
    registerRequest.firstName = this.registerForm.controls.firstName.value;
    registerRequest.lastName = this.registerForm.controls.lastName.value;
    registerRequest.email = this.registerForm.controls.email.value;
    registerRequest.phone = this.registerForm.controls.phone.value;
    registerRequest.profession = this.registerForm.controls.profession.value;
    registerRequest.interestHobbies = this.registerForm.controls.interestHobbies.value;
    registerRequest.addressline1 = this.registerForm.controls.addressline1.value;
    registerRequest.addressline2 = this.registerForm.controls.addressline2.value;
    registerRequest.country = this.registerForm.controls.country.value;
    registerRequest.state = this.registerForm.controls.state.value;
    registerRequest.city = this.registerForm.controls.city.value;
    registerRequest.zip = this.registerForm.controls.zip.value;
    this.memberService.registerMember(registerRequest).subscribe( () => {
      this.toastCtrl.create({
        message:'Thank you for being a member with GGA',
        duration:2000
      }).then(toast => {
        toast.present();
      });
    });
    }
  }

}
