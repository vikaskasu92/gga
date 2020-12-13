import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private adminService:AdminService) { }

  newsArray:any[] = [];

  ngOnInit() {
    this.adminService.fetchNews().subscribe( resData => {
      this.newsArray = resData;
    });
  }

}
