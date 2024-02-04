import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent 
{
  public Arr : number[] = [1,2,3,4,5];
}
