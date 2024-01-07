import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService]
})
export class ChildComponent 
{
  public Result : boolean;
  public Count : number;
  public Str : string;

  constructor(private nobj : NumberService, private strobj : StringService)
  {
    this.Result = false;
    this.Count = 0;
    this.Str = "MarVeLLous INfosYstems";

    this.Result = this.nobj.ChkPrime(23);
    this.Count = this.strobj.CountCapital(this.Str);
  }
}
