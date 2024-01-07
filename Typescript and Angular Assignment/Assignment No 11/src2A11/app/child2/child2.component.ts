import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component 
{
  public Str : string;
  public Count : number;

  constructor(private obj : StringService)
  {
    this.Str = "MarVellous InFosystems";
    this.Count = 0;
    this.Count = this.obj.CountCapital(this.Str);
  } 
}
