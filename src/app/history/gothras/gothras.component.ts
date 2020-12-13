import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gothras',
  templateUrl: './gothras.component.html',
  styleUrls: ['./gothras.component.scss'],
})
export class GothrasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("came to gothras")
  }

  ionViewWillLeave(){
    console.log("leaving gothras")
  }

}
