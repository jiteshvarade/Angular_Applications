import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, PersonalInfoComponent, BugInfoComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
