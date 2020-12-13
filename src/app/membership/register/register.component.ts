import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private modalCtrl:ModalController,
              private memberService:MembershipService,
              private toastCtrl:ToastController) { }

  registerForm:FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      'title': new FormControl(null,[Validators.required]),
      'firstName': new FormControl(null,[Validators.required]),
      'lastName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email]),
      'phone': new FormControl(null,[Validators.required]),
      'profession': new FormControl(null,[Validators.required]),
      'interestHobbies': new FormControl(null,[Validators.required]),
      'addressline1': new FormControl(null,[Validators.required]),
      'addressline2': new FormControl(null),
      'country': new FormControl("USA",[Validators.required]),
      'state': new FormControl(null,[Validators.required]),
      'zip': new FormControl(null,[Validators.required])
    });
    this.registerForm.controls.country.disable();
  }

  register(){
    if(this.registerForm.valid){
      let registerRequest:any = {};
      registerRequest.title = this.registerForm.controls.title.value;
      registerRequest.firstName = this.registerForm.controls.title.value;
      registerRequest.lastName = this.registerForm.controls.lastName.value;
      registerRequest.email = this.registerForm.controls.email.value;
      registerRequest.phone = this.registerForm.controls.phone.value;
      registerRequest.profession = this.registerForm.controls.profession.value;
      registerRequest.interestHobbies = this.registerForm.controls.interestHobbies.value;
      registerRequest.addressline1 = this.registerForm.controls.addressline1.value;
      registerRequest.addressline2 = this.registerForm.controls.addressline2.value;
      registerRequest.country = this.registerForm.controls.country.value;
      registerRequest.state = this.registerForm.controls.state.value;
      registerRequest.zip = this.registerForm.controls.zip.value;
      this.memberService.registerMember(registerRequest).subscribe( () => {
        this.toastCtrl.create({
          message:'Thank you for being a member with GGA',
          duration:2000
        }).then(toast => {
          toast.present();
        });
        this.closeRegister();
      });
    }
  }

  closeRegister(){
    this.modalCtrl.dismiss();
  }

}
