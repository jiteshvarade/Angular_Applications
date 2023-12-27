import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, MarvellousChkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public No : number = 0;
  public Str : string = "";
  public ResultStr : string = "";

  public prime() : void
  {
    this.Str = "prime";
  }

  public perfect() : void
  {
    this.Str = "perfect";
  }

  public even() : void
  {
    this.Str = "even";
  }

  public odd() : void
  {
    this.Str = "odd";
  }
}
