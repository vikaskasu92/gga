import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from './register/register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  registerAsMember(){
      this.modalCtrl.create({
        component:RegisterComponent,
        backdropDismiss:false
      }).then(modal => {
        modal.present();
      });
  }

  volunteers(){
    this.modalCtrl.create({
      component:VolunteerComponent,
      backdropDismiss:false
    }).then(modal => {
      modal.present();
    });
  }

}
