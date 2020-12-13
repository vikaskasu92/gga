import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.page.html',
  styleUrls: ['./edit-news.page.scss'],
})
export class EditNewsPage implements OnInit {

  constructor(private adminService: AdminService,
              private modalCtrl:ModalController,
              private router:Router) { }

  @Input() id:string;
  @Input() title:string;
  @Input() description:string;
  @Input() date:string;
  newTitle:string;
  newDescription:string;
  newDate:string;

  ngOnInit() {
    this.newTitle = this.title;
    this.newDescription = this.description;
    this.newDate = this.date;
  }

  titleChanged(event:any){
    this.newTitle = event.detail.value;
  }

  descriptionChanged(event:any){
    this.newDescription = event.detail.value;
  }

  dateChanged(event:any){
    this.newDate = event.detail.value;
    console.log(this.newDate );
  }

  saveEditedNews(){
    if(this.newTitle !== "" && this.newDescription !== ""){
      this.adminService.editNewsOnDB(this.id,this.newTitle,this.newDescription,this.newDate).subscribe( res => {
        this.modalCtrl.dismiss();
      },error =>{
        if(error.statusText === "Unauthorized"){
          this.router.navigateByUrl('/login');
        }
      })
    }
  }

  cancelEdit(){
    this.modalCtrl.dismiss();
  }

}
