import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navCtrl:NavController,
              private router:Router,
              private menu: MenuController) { }

  ngOnInit() {}
  

  navigateTo(page:string){
    this.navCtrl.navigateForward('/'+page);
  }

  checkForLogin(){
    this.router.navigateByUrl('/admin');
  }

  donate(){
    window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NAV4UMWXAA4B4&source=url","_blank");
  }

  toggleMenu(){
    console.log("came to call menu")
    this.menu.open('m1');
  }


}
