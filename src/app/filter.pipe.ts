import { Pipe, PipeTransform } from '@angular/core';

import { Task } from "../app/models/Task";

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], query: string): any[] {
  
      if (!items || !items[0]) {
        return [];
      }
      if (!query) {
        return items;
      }
      query = query.toLowerCase();
      
      return items.filter(it => {
        return it.task.toLowerCase().includes(query);
      });
    }
}