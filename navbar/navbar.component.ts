import { Component, TemplateRef } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
authenticated: TemplateRef<NgIfContext<boolean>> | null | undefined;
notAuthenticated: TemplateRef<NgIfContext<boolean>> | null | undefined;

  constructor(public auth:AuthService) { }

  ngOnInit():void{
    
  }
}
