import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(No1 : number, No2 : number) : number
  {
    let Ans : number = 0;
    Ans = No1 + No2;
    return Ans;
  }

  public Subtract(No1 : number, No2 : number) : number
  {
    let Ans : number = 0;
    Ans = No1 - No2;
    return  Ans;
  }
}
