import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedDataService 
{
  public FirstName : any;
  public LastName : any;
  public Email : any;
  public DD : number;
  public MM : number;
  public YYYY : number;
  public Hour : number;
  public Min : number;
  public Sec : number;
  public Impact : any;
  public bugInfo : any;

  constructor() 
  { 
    this.DD = 0;
    this.MM = 0;
    this.YYYY = 0;
    this.Hour = 0;
    this.Min = 0;
    this.Sec = 0;
  }

  public firstname(value : any)
  {
    this.FirstName = value;
  }

  public lastname(value : any)
  {
    this.LastName = value;
  }

  public email(value : any)
  {
    this.Email = value;
  }

  public dd(value : any)
  {
    this.DD = value;
  }

  public mm(value : any)
  {
    this.MM = value;
  }

  public yyyy(value : any)
  {
    this.YYYY = value;
  }

  public hour(value : any)
  {
    this.Hour = value;
  }

  public min(value : any)
  {
    this.Min = value;
  }

  public sec(value : any)
  {
    this.Sec = value;
  }

  public impact(value : any)
  {
    this.Impact = value;
  }

  public buginfo(value : any)
  {
    this.bugInfo = value;
  }
}

