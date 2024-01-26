import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, CustomerInfoComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
