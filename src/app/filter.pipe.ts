import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], query: string): any[] {
  
      if (!items) {
        return [];
      }
      if (!query) {
        return items;
      }
      query = query.toLowerCase();
  
      return items.filter(it => {
        return it.task.toLowerCase().includes(query) || it.assignee.toLowerCase().includes(query);
      });
    }
  }