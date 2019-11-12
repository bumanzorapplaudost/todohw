import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../models/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

    @Output() sendTaskToEdit: EventEmitter<Task> = new EventEmitter();

    query:string = "";

    tasks:Task[];

    constructor() {

        if(!localStorage.getItem("tasks")) {
            localStorage.setItem("tasks", JSON.stringify([]));
        }

        let date = new Date();
        this.tasks = this.showTasks();

     }

    ngOnInit() {

    }

    showTasks() {

        return JSON.parse(localStorage.getItem("tasks")).sort((a,b) => {
            if(a.creation_date < b.creation_date) return -1;
            if(a.creation_date > b.creation_date) return 1;
            return 0;
        });
    }

    removeTask(task:Task) {
        if(confirm("Are you sure you want to remove this task?")) {

            //Delete from LocalStorage
            let mytasks = JSON.parse(localStorage.getItem("tasks")).filter((t) => {
                return t.id != task.id;
            });

            //Show the updated list.
            localStorage.setItem("tasks", JSON.stringify(mytasks));
            this.tasks = this.showTasks();

        }
    }

    taskAdded(task) {
        this.tasks = this.showTasks();
    }

}
