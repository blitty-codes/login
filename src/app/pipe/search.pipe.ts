import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(list: any[], inputSelection: string, inputType: string): any[] {
    if (inputSelection === undefined || inputType === undefined) return list;
    console.log(`InputSelection: ${inputSelection}\ninputType: ${inputType}`);
    return list.filter(book => book.inputType.toUpperCase().includes(inputSelection.toUpperCase()));
  }

}
