import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carPlateView'
})
export class CarPlateViewPipe implements PipeTransform {

  transform(value: string): string {
    
    const plateTemplate = /^[a-zA-Z]{3}[0-9]{4}$/; 

    let valid: boolean = plateTemplate.test(value);
  
    if (!valid) return "Invalid";
    
    let plate = value.substr(0,3).toUpperCase() + "-" + value.substr(3);
    return plate;
  }

}
