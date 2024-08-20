import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], filterString:any,propName:any): any {
    const resultArray = [];

    if(value.length === 0 || filterString ==='' || propName === ''){
      return value;
    }
    for(const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
