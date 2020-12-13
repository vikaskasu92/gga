import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navCtrl:NavController,
              private router:Router) { }

  ngOnInit() {}
  

  navigateTo(page:string){
    this.navCtrl.navigateForward('/'+page);
  }

  checkForLogin(){
    this.router.navigateByUrl('/admin');
  }


}
