import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-bug-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent 
{
  constructor(private obj : SharedDataService)
  {
    
  }

  public DD(value : any) : void
  {
    this.obj.dd(value);
  }

  public MM(value : any) : void
  {
    this.obj.dd(value);
  }

  public YYYY(value : any) : void
  {
    this.obj.dd(value);
  }

  public Hour(value : any) : void
  {
    this.obj.dd(value);
  }

  public Min(value : any) : void
  {
    this.obj.dd(value);
  }

  public Sec(value : any) : void
  {
    this.obj.dd(value);
  }
  
  public bugInfo(value : any) : void
  {
    this.obj.dd(value);
  }

  public option(value : any) : void
  {
    this.obj.impact(value);
  }

}

