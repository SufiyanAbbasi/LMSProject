import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";
import { PagesidenavComponent } from "./components/pagesidenav/pagesidenav.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MaterialModule, PageHeaderComponent, PageFooterComponent, PagesidenavComponent]
})
export class AppComponent {
  title = 'LMSUI';
}
