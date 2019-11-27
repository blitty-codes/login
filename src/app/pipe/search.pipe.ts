import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], types: any[]): any[] {
    if (!types[0]) return list;
    console.log(list);
    return list.filter(book => book.types[1].toUpperCase().includes(types[0].toUpperCase()));
  }

}
