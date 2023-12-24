import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Str : string = "Marvellous Infosystems";

  public fun() : void
  {
    this.Str = "Education for better tommorow.";
  }
}
