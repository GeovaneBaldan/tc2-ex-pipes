import { Pipe, PipeTransform } from '@angular/core';
import { NameAbntViewPipe } from '../nameABNT/name-abnt-view.pipe';

@Pipe({
  name: 'nameListAbntView'
})
export class NameListAbntViewPipe implements PipeTransform {

  transform(value: string): string {

    let SingleNameConverter: NameAbntViewPipe = new NameAbntViewPipe();

    let nameList: string[] = value.split(", ");
    
    if (nameList.length > 3) 
      return SingleNameConverter.transform(nameList[0]) + " et. al.";
    

    let aux: string = "";

    for (let i = 0; i < nameList.length; i++) {
      if (i === nameList.length-1) {
        aux += SingleNameConverter.transform(nameList[i]);
      } else {
        aux += SingleNameConverter.transform(nameList[i]) + "; ";
      }
    }

    return aux;
  }

}
