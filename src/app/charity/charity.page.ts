import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.page.html',
  styleUrls: ['./charity.page.scss'],
})
export class CharityPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  donateToGGA(){
    window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NAV4UMWXAA4B4&source=url","_blank");
  }

}
