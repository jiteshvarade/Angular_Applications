import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    value = args[0] + args[1];
    return value;
  }

}
