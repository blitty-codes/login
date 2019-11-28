import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(list: any[], inputSelection: string, inputType: string): any[] {
    if (inputSelection === undefined || inputType === undefined) return list;
    console.log(`InputSelection: ${inputSelection.toLocaleLowerCase()}\ninputType: ${inputType}`);
    console.log(`includes: ${inputSelection} ${'Buenos dias LA CASA'.includes(inputSelection.toLocaleUpperCase())}`);

    if (inputType === 'title') return list.filter(book => book.title.toLocaleUpperCase().includes(inputSelection.toLocaleUpperCase()));
    if (inputType === 'author') return list.filter(book => book.author.toLocaleUpperCase().includes(inputSelection.toLocaleUpperCase()));
    if (inputType === 'description') return list.filter(book => book.description.toLocaleUpperCase().includes(inputSelection.toLocaleUpperCase()));
    if (inputType === 'ISBN') return list.filter(book => book.ISBN.toLocaleUpperCase().includes(inputSelection.toLocaleUpperCase()));
    if (inputType === 'price') return list.filter(book => book.price.toLocaleUpperCase().includes(inputSelection.toLocaleUpperCase()));
    if (inputType === 'publisher') return list.filter(book => book.publisher.toLocaleUpperCase().includes(inputSelection.toLocaleUpperCase()));
    //return list.filter(book => book.inputType.includes(inputSelection)); // no funciona
  }

}
