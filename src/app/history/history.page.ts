import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    console.log("came to history")
  }

  ionViewWillLeave(){
    console.log("leaving history")
  }

}
