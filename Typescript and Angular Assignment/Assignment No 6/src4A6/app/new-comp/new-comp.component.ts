import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})

export class NewCompComponent 
{
  public Name : string = "Marvellous";

  public ToSmallCase() : string
  {
    return this.Name.toLowerCase();
  }

  public ToUpperCase() : string
  {
    return this.Name.toUpperCase();
  }

  public DisplayName() : string
  {
    return this.Name;
  }

  public Display() : string
  {
    return this.Name + " Infosystems";
  }
}
