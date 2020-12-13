import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad, CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this._checAuth();
  }

  constructor(private modalCtrl:ModalController){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this._checAuth();
  }

  private _checAuth():boolean{
    let loginObject = JSON.parse(localStorage.getItem("ggaLogin"));
    if(loginObject !== undefined && loginObject !== null){
      if(new Date().setTime(loginObject.expiresIn) >= new Date().getTime()){
        if(this.modalCtrl){
          this.modalCtrl.dismiss();
        }
        return true;
      }else{
        this._loginModal();
        return false;
      }
    }else{
      this._loginModal();
      return false;
    }
  }

  private _loginModal(){
    this.modalCtrl.create({
      component:LoginPage,
      backdropDismiss:false
    }).then( modal => {
      modal.present();
    });
  }
  
}
