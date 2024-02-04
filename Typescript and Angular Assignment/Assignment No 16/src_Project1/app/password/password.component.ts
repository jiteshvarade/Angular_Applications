import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent 
{
  public Password : any;

  constructor()
  {
    this.Password = "JiteshAnilVarade12@"
  }
}
