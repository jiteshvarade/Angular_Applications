import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    value = args[0] * args[1];
    return value;
  }

}
