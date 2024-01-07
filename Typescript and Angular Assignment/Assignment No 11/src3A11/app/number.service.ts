import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() { }

  public ChkPrime(No : number) : boolean
  {
    let iCnt : number = 0;
    for(iCnt = 2; iCnt <= (No/2); iCnt++)
    {
      if((No % iCnt) == 0)
      {
        return false;
      }
    }

    return true;
  }
}
