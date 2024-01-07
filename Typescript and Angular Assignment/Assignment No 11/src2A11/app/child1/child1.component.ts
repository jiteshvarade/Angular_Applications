import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component 
{
  public Result : boolean;
  public constructor(private obj : NumberService)
  {
    this.Result = false;
    this.Result = this.obj.ChkPrime(17);
  }
}
