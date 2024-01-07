import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  constructor() { }

  public CountCapital(Str : string) : number
  {
    let Count : number = 0;
    let iCnt : number = 0;
    for(iCnt = 0; iCnt < Str.length; iCnt++)
    {
      if((Str[iCnt] >= 'A') && (Str[iCnt] <= 'Z'))
      {
        Count++;
      }
    }

    return Count;
  }
}
