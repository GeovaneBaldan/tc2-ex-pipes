import { Pipe, PipeTransform } from '@angular/core';

import conversionList from 'src/app/utils/stringToNumber';
@Pipe({
  name: 'phoneView'
})
export class PhoneViewPipe implements PipeTransform {

  transform(phoneNumber: string, country: string): string {
    
    let value = phoneNumber;

    const phoneBRTemplate = /^[0-9]{10,13}$/;
    const phoneUSTemplate = /^[a-zA-Z0-9]{10,13}$/;

    let phone : string = "";

    if (country === 'BR') {
      let valid : boolean = phoneBRTemplate.test(value);
      if (!valid) return "Invalid";
    }

    if (country === 'US') {
      let valid : boolean = phoneUSTemplate.test(value); 
      if (!valid) return "Invalid";

      let aux = value.toUpperCase().split("");
      let auxLen = aux.length;

      for (let i = 0; i < auxLen; i++) {
        if (!parseInt(aux[i])) {
          for (let [key, value] of conversionList) {
            if (aux[i] === key)
              aux[i] = value;
          }
        }
      }
      value = aux.join("");
    }

    if (value.length === 10) 
        phone = "(" + value.substr(0, 2) + ") " + value.substr(2,4) +
          "-" + value.substr(6,4);

      if (value.length === 11)
        phone = "(" + value.substr(0, 2) + ") " + value.substr(2,1) + 
          " " + value.substr(3,4) + "-" + value.substr(7,4);

      if (value.length === 12)
        phone = "+" + value.substr(0,2) + " (" + value.substr(2,2) + ") " +
          value.substr(4,4) + "-" + value.substr(8,4);

      if (value.length === 13)
        phone = "+" + value.substr(0,2) + " (" + value.substr(2,2) + ") " +
          value.substr(4,1) + " " + value.substr(5,4) + "-" + value.substr(9,4);
      
      return phone;
  }

}
