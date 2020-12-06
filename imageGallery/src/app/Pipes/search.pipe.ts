import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();  
    let returnCollection = [];
    items.forEach(item => {
        if (item.title.toLocaleLowerCase().includes(searchText)) {
            returnCollection.push(item);
        }        
    });
    return returnCollection;
  }

}
