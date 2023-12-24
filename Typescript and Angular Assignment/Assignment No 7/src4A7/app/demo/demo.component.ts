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

  public ToUpperCase() : void
  {
    this.Str = this.Str.toUpperCase();
  }

  public ToLowerCase() : void
  {
    this.Str = this.Str.toLowerCase();
  }
}
