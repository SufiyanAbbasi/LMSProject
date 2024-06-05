import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterLink } from '@angular/router';
export interface NavigationItem {
  value: string;
  link: string;
}
@Component({
  selector: 'app-pagesidenav',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './pagesidenav.component.html',
  styleUrl: './pagesidenav.component.scss'
})
export class PagesidenavComponent {
  panelName: string = "Student Panel";

  navItems: NavigationItem[] = [
    {value: 'View Books', link:"view-books"},
    {value: 'My Order', link:"orders"},
  ];
  
}



