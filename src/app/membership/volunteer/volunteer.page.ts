import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {

  constructor(private memberService:MembershipService,
    private toastCtrl:ToastController) { }

  volunteerForm:FormGroup;
  countries:string[] = [];
  states:string[] = [];
  ukSelected:boolean = false;
  middleEastSelected:boolean = false;

  ngOnInit() {
    this.countries = this.memberService.countries;
    this.volunteerForm = new FormGroup({
      'title': new FormControl(null),
      'firstName': new FormControl(null,[Validators.required]),
      'lastName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email]),
      'phone': new FormControl(null,[Validators.required]),
      'profession': new FormControl(null),
      'interestHobbies': new FormControl(null),
      'country': new FormControl(null,[Validators.required]),
      'state': new FormControl(null,[Validators.required]),
      'city': new FormControl(null,[Validators.required]),
      'zip': new FormControl(null,[Validators.required])
    });
    this.volunteerForm.controls.state.disable();
  }

  countryChanged(event:any){
    this.volunteerForm.controls.state.enable();
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

  volunteer(){
    if(this.volunteerForm.valid){
      let volunteerRequest:any = {};
      volunteerRequest.title = this.volunteerForm.controls.title.value;
      volunteerRequest.firstName = this.volunteerForm.controls.title.value;
      volunteerRequest.lastName = this.volunteerForm.controls.lastName.value;
      volunteerRequest.email = this.volunteerForm.controls.email.value;
      volunteerRequest.phone = this.volunteerForm.controls.phone.value;
      volunteerRequest.profession = this.volunteerForm.controls.profession.value;
      volunteerRequest.interestHobbies = this.volunteerForm.controls.interestHobbies.value;
      volunteerRequest.country = this.volunteerForm.controls.country.value;
      volunteerRequest.state = this.volunteerForm.controls.state.value;
      volunteerRequest.city = this.volunteerForm.controls.city.value;
      volunteerRequest.zip = this.volunteerForm.controls.zip.value;
      this.memberService.registerVolunteer(volunteerRequest).subscribe( () => {
        this.toastCtrl.create({
          message:'Thank you for registering as a volunteer with GGA',
          duration:2000
          }).then(toast => {
          toast.present();
          });
      });
      }
    }
  }
