import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform 
{
  transform(value1 : string, value2 : number, value3 : string) : string 
  {
    switch(value3)
    {
      case "prime" : 
        if((value2 % 2) == 0)
        {
          return "not prime";
        }
        else
        {
          let iCnt : number = 0;
          for(iCnt = 3; iCnt <= (value2/2); iCnt = iCnt + 2)
          {
            if((value2 % iCnt) == 0)
            {
              return "not prime";
            }
          }
          return "prime";
        }
      case "perfect" : 
        let Sum : number = 0;
        let iCnt : number = 0;
        for(iCnt = 1; iCnt <= (value2/2); iCnt++)
        {
          if((value2 % iCnt) == 0)
          {
            Sum += iCnt;
          }
        }

        if(Sum == 0)
        {
          return "not perfect";
        }
        else if(Sum == value2)
        {
          return "perfect";
        }
        else
        {
          return "not perfect";
        }
      case "even" :
        if((value2 % 2) == 0)
        {
          return "even";
        }
        else
        {
          return "not even";
        }
      case "odd" : 
        if((value2 % 2) != 0)
        {
          return "odd";
        }
        else
        {
          return "not odd";
        }
      default : 
        return "";
    }
  }
}
