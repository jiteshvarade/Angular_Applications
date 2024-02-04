import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(Value1 : number, Value2 : any): string 
  {
    Value2 = Value2.toLowerCase();

    if(Value2 == "prime")
    {
      let iCnt = 0;
      for(iCnt = 2; iCnt <= (Value1/2); iCnt++)
      {
        if((Value1 % iCnt) == 0)
        {
          return "Numebr is not a prime number";
        }
      }

      return "Number is prime number";
    }
    else if(Value2 == "perfect")
    {
      let iCnt = 0;
      let Sum = 0;
      for(iCnt = 2; iCnt <= (Value1/2); iCnt++)
      {
        if((Value1 % iCnt) == 0)
        {
          Sum += iCnt;
        }
      }

      if(Sum == Value1)
      {
        return "Number is a perfect number";
      }
      else
      {
        return "Number is not a perfect number";
      }
    }
    else if(Value2 == "even")
    {
      if((Value1 % 2) == 0)
      {
        return "Number is even";
      }
      else
      {
        return "Number is not even";
      }
    }
    else if(Value2 == "odd")
    {
      if((Value1 % 2) != 0)
      {
        return "Number is odd";
      }
      else
      {
        return "Number is not odd";
      }
    }
    else
    {
      return "Invalid parameter";
    }
  }

}
