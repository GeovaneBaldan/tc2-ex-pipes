import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAbntView'
})
export class NameAbntViewPipe implements PipeTransform {

  transform(value: string): string {
    
    const nameTemplate = /\w+\s+\w/;

    let valid = nameTemplate.test(value);

    if (!valid) return "Invalid";

    let aux = this.capitalize(value);
    
    return this.displayName(aux);
  }

  capitalize(str: string): string[] {
    const arr = str.split(" ");

    const result : string[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        let aux: string = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(aux);
      }
    }

    return result;
  }

  getMiddleNames(arr: string[]): string {
    let middleNames: string = "";

    for (let i = 1; i < arr.length-1; i++) {
      let aux: string = arr[i].charAt(0) + ".";
      middleNames += aux + " ";
    }

    return middleNames;
  } 

  displayName(arr: string[]): string {
    let abntName = "";

    let firstName = arr[0];
    let lastName = arr[arr.length-1];

    if (arr.length < 3) {
      abntName = lastName.toUpperCase() + ", " + firstName;
    } else {

      let middleNames = this.getMiddleNames(arr);

      abntName = lastName.toUpperCase() + ", " + firstName + " " + middleNames;
    }

    return abntName;
  }
}
