import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

    tasks:Task[];

    constructor() {

        let date = new Date();
        /* 
        let temptasks = [
            {
                id: 1,
                task: "Take out the trash",
                assignee: "John",
                creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                status: false
            },
            {
                id: 2,
                task: "Wash the bathroom",
                assignee: "Laura",
                creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                status: false
            },
            {
                id: 3,
                task: "Make the bed",
                assignee: "",
                creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                status: false
            },
        ];
        localStorage.setItem("tasks", JSON.stringify(temptasks)); */

        this.tasks = this.showTasks()
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
