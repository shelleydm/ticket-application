//Credit for tutorial: https://remotestack.io/angular-custom-filter-search-pipe-example-tutorial/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (data: any) {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}
