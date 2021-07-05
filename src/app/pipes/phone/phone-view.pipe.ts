import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneView'
})
export class PhoneViewPipe implements PipeTransform {

  transform(value: string, country: string): string {
    
    const phoneBRTemplate = /^[0-9]{10,13}$/;

    if (country === 'BR') {
      let valid : boolean = phoneBRTemplate.test(value);
      let phone : string = "";

      if (!valid) return "Invalid";
      
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

    return value;
  }

}
