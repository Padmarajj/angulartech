import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  canAuthenticate() {
    throw new Error('Method not implemented.');
  }
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  storeToken(idToken: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
       return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()){
        //redirect to login
        <any>this.router.navigate(['/login']);
    }
  }
  logout(){
    console.log('User logged out');
  }

  
}



