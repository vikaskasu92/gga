import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private navCtrl:NavController,
            private router:Router) { }

  ngOnInit() {}


  footerNavigate(page:string){
    this.navCtrl.navigateForward('/'+page);
  }

  goToFaceBook(){
    window.open("https://www.facebook.com/globalgorsassociation");
  }

  goToYoutube(){
    window.open("https://www.youtube.com/channel/UCbUMsrLHBqVmrRD-9FrkieQ");
  }

  checkForLogin(){
    this.router.navigateByUrl('/admin');
  }

}
