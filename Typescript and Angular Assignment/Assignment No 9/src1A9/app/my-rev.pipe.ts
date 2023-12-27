import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform 
{
  transform(value: any, ...args: any[]): any 
  {
    value = "";
    let iCnt : number = 0;
    for(iCnt = args[0].length - 1; iCnt >= 0; iCnt--)
    {
      value += args[0][iCnt];
    }

    return value;
  }
}
