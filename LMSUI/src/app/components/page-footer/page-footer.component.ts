import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss'
})
export class PageFooterComponent {

}
