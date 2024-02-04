import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(Value1 : number, Value2 : number): number 
  {
    return (Value1 + Value2);
  }

}
