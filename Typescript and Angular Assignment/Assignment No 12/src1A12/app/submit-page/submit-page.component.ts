import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-submit-page',
  standalone: true,
  imports: [],
  templateUrl: './submit-page.component.html',
  styleUrl: './submit-page.component.css'
})
export class SubmitPageComponent 
{
  constructor(public obj : SharedDataService)
  {

  }
}
