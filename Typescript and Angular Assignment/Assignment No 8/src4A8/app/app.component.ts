import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  public Message : any = "";

  public LenOfMessage : number = 0;

  public MessageSent(event : any)  : void
  {
    this.Message = event.target.value;
    this.LenOfMessage = this.Message.length;
  }
}
