import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], property: any, descending?: boolean): any {
    if (!value || value.length) {
      return value;
    }

    value.sort((first: any, second: any): number => {
      if (first[property] === null || second[property] === null) {return 0}
      else {
        return first[property] > second[property] ? 1 : -1;}
    });

    if (descending) {
      return value.reverse();
    }

    return value;
  }
}
