import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, AfterViewInit {

  constructor(private renderer:Renderer2,
              private contactService:ContactService,
              private toastCtrl:ToastController) { }

  @ViewChild('map',{static:false}) map:ElementRef;
  contactForm:FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'message': new FormControl(null,[Validators.required])
    });
    
  }

  ngAfterViewInit(){
    this.getGoogleMaps().then( googleMaps => {
      const mapEl = this.map.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: {lat:29.656550,lng:-95.704760},
        zoom: 16
      })

      googleMaps.event.addListenerOnce(map,'idle',() => {
        this.renderer.addClass(mapEl,'visible');
      })
    }).catch( err =>{
      console.log(err);
    });
  }

  sendEmail(){
   if(this.contactForm.valid){
     let contactGGARequest:any = {};
     contactGGARequest.name= this.contactForm.controls.name.value;
     contactGGARequest.email= this.contactForm.controls.email.value;
     contactGGARequest.message= this.contactForm.controls.message.value;
      this.contactService.contactGGA(contactGGARequest).subscribe( contactedGGA => {
        this.toastCtrl.create({
          message:'Thanks for contacting GGA, A GGA representative will reach out to you shortly',
          duration:5000,
          position:'middle'
        }).then(toast => {
          toast.present();
        })
      });
   }

  }

  private getGoogleMaps():Promise<any>{
    const win = window as any;
    const googleModule = win.google;
    if(googleModule && googleModule.maps){
      return Promise.resolve(googleModule.maps);
    }
    return new Promise( (resolve,reject) => {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyACSEML5gLZsAKS8BCIRy0LtsAPhUXxlno";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps){
          resolve(loadedGoogleModule.maps);
        }else{
          reject('Google Maps SDK not available');
        }
      }
    })
  }

}
