import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { EditNewsPage } from './edit-news/edit-news.page';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, AfterViewInit {

  constructor(private modalCtrl:ModalController,
            private adminService:AdminService,
            private router:Router,
            private toastCtrl:ToastController) { }

  addNews:boolean = true;
  manageNews:boolean = false;
  addNewsForm:FormGroup;
  newsArray:any[] = [];
  volunteersArray:any[] = [];
  membersArray:any[] = [];
  noNews:boolean = true;
  spinner:boolean = false;
  today:string;
  members:boolean;
  volunteers:boolean;
  noVolunteers:boolean;
  noMembers:boolean;
  displayedColumnsVolunteers: string[] = ['title', 'firstName', 'lastName','email','phone','profession','interestHobbies','country','state','city','zip'];
  displayedColumnsMembers: string[] = ['title', 'firstName', 'lastName','email','phone','addressline1','addressline2','profession','interestHobbies','country','state','city','zip'];
  volunteerSource: MatTableDataSource<any>;
  memberSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.addNewsForm = new FormGroup({
      'title': new FormControl(null,[Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'date': new FormControl(null,[Validators.required])
    });
    let date = new Date().toLocaleDateString();
    let month = date.substring(0,2);
    if(month.length === 1){
      month = 0+month;
    }
    let day = date.substring(3,5);
    let year = date.substring(6,10);
    this.today = year+'-'+month+'-'+day;
    console.log(this.today)
  }

  ngAfterViewInit() {
  
  }

  segmentChanged(ev: any) {
   if(ev.detail.value === "add"){
      this.addNews = true;
      this.manageNews = false;
      this.volunteers = false;
      this.members = false;
   }else if(ev.detail.value === "manage"){
     this.noNews = false;
      this.spinner = true;
      this.fetchNews();
      this.manageNews = true;
      this.addNews = false;
      this.volunteers = false;
      this.members = false;
   }
   else if(ev.detail.value === "volunteers"){
    this.noNews = false;
    this.spinner = true;
    this.manageNews = false;
    this.addNews = false;
    this.fetchVolunteers();
    this.volunteers = true;
    this.members = false;
   }
   else{
    this.noNews = false;
    this.spinner = true;
    this.manageNews = false;
    this.addNews = false;
    this.volunteers = false;
    this.fetchMembers();
    this.members = true;
   }
  }

  applyVolunteerFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.volunteerSource.filter = filterValue.trim().toLowerCase();

    if (this.volunteerSource.paginator) {
      this.volunteerSource.paginator.firstPage();
    }
  }

  applyMemberFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.memberSource.filter = filterValue.trim().toLowerCase();

    if (this.memberSource.paginator) {
      this.memberSource.paginator.firstPage();
    }
  }

  addNewsToDB(){
    if(this.addNewsForm.valid){
      this.adminService.addNewsToDB(this.addNewsForm.controls.title.value,this.addNewsForm.controls.description.value,this.addNewsForm.controls.date.value).subscribe( responseData => {
        this.addNewsForm.controls.title.setValue("");
        this.addNewsForm.controls.description.setValue("");
        this.addNewsForm.controls.date.setValue("");
        this.noNews = false;
        this.toastCtrl.create({
          message:'News Saved Successfully',
          duration:2000
        }).then(toast => {
          toast.present();
        });
      },error =>{
        if(error.statusText === "Unauthorized"){
          this.router.navigateByUrl('/login');
        }
      });
    }
  }

  fetchNews(){
    this.noNews = false;
    this.adminService.fetchNews().subscribe( resData => {
      console.log(resData);
      this.spinner = false;
      this.newsArray = resData;
      if(this.newsArray.length === 0) {
        this.noNews = true;
      }
    },error => {
      this.spinner = false;
      this.noNews = true;
      if(error.statusText === "Unauthorized"){
        this.router.navigateByUrl('/login');
      }
    });
  }

  fetchVolunteers(){
    this.noVolunteers = false;
    this.adminService.fetchVolunteers().subscribe( resData => {
      console.log(resData);
      this.spinner = false;
      this.volunteerSource = new MatTableDataSource(resData);
      this.volunteerSource.paginator = this.paginator;
      this.volunteerSource.sort = this.sort;
    },error => {
      this.spinner = false;
      this.noVolunteers = true;
      if(error.statusText === "Unauthorized"){
        this.router.navigateByUrl('/login');
      }
    });
  }

  fetchMembers(){
    this.noMembers = false;
    this.adminService.fetchMembers().subscribe( resData => {
      console.log(resData);
      this.spinner = false;
      this.memberSource = new MatTableDataSource(resData);
      this.memberSource.paginator = this.paginator;
      this.memberSource.sort = this.sort;
    },error => {
      this.spinner = false;
      this.noMembers = true;
      if(error.statusText === "Unauthorized"){
        this.router.navigateByUrl('/login');
      }
    });
  }


  deleteNews(id:string){
    this.adminService.deleteNewsOnDB(id).subscribe( res =>{ 
      this.fetchNews();
    },error =>{
      if(error.statusText === "Unauthorized"){
        this.router.navigateByUrl('/login');
      }
    });
    
  }

  editNews(id:string,title:string,description:string,date:string){
    console.log(date);
    this.modalCtrl.create({
      component:EditNewsPage,
      componentProps:{id:id,title:title,description:description,date:date},
      backdropDismiss:false
    }).then( modal => {
      modal.present();
      modal.onDidDismiss().then( () =>{
        this.fetchNews();
      })
    })

  }

}
