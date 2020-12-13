import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl:NavController,
            private adminService:AdminService) { }

  newsArray:any[] = [];

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.adminService.fetchNews().subscribe( resData => {
      
      this.newsArray = resData;
    });
  }

  navigateTo(page:string){
    this.navCtrl.navigateForward('/'+page);
  }

  moreNews(){
    this.navCtrl.navigateForward('/news');
  }

}
