import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    description:string;
    assignee:string;
    status:boolean;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
      let date = new Date();
      let task = {
          id: Math.random() * 500,
          task: this.description,
          assignee: this.assignee,
          creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
          status: this.status,
      }
  }

}
