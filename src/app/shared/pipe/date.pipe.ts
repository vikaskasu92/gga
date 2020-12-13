import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFetch'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    if(value != undefined){
      let year = value.substring(0,4);
      let month = value.substring(5,7);
      let day = value.substring(8,10);
      return month+'-'+day+'-'+year;
    }
    return "";
   
  }

}
