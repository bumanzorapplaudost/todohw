import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Task }from '../models/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

    private task = new Subject<Task>();

  constructor() { }

  editTask(task:Task) {
    this.task.next(task);
  }

}
