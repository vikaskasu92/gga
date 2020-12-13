import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss'],
})
export class VolunteerComponent implements OnInit {

  constructor(private modalCtrl:ModalController,
              private memberService:MembershipService,
              private toastCtrl:ToastController) { }

  volunteerForm:FormGroup;

  ngOnInit() {
    this.volunteerForm = new FormGroup({
      'title': new FormControl(null,[Validators.required]),
      'firstName': new FormControl(null,[Validators.required]),
      'lastName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email]),
      'phone': new FormControl(null,[Validators.required]),
      'profession': new FormControl(null,[Validators.required]),
      'interestHobbies': new FormControl(null,[Validators.required]),
      'country': new FormControl("USA",[Validators.required]),
      'state': new FormControl(null,[Validators.required]),
      'city': new FormControl(null,[Validators.required]),
      'zip': new FormControl(null,[Validators.required])
    });
    this.volunteerForm.controls.country.disable();
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
        this.closeVolunteer();
      });
    }

  }

  closeVolunteer(){
    this.modalCtrl.dismiss();
  }

}
