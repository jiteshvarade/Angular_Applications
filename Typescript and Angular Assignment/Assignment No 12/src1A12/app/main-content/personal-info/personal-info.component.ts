import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent 
{
  constructor(private obj : SharedDataService)
  {
    
  }

  public FirstName(value : any) : void
  {
    this.obj.firstname(value);
  }

  public LastName(value : any) : void
  {
    this.obj.lastname(value);
  }

  public Email(value : any)
  {
    this.obj.email(value);
  }
}
