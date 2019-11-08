import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

    tasks:Task;

    constructor() {
        /*
        let temptasks = [
            {
                id: 1,
                task: "Take out the trash",
                assignee: "John",
                status: false
            },
            {
                id: 2,
                task: "Wash the bathroom",
                assignee: "Laura",
                status: false
            },
            {
                id: 3,
                task: "Make the bed",
                assignee: "",
                status: false
            },
        ];
        localStorage.setItem("tasks", JSON.stringify(temptasks)); */

        this.tasks = this.showTasks()
     }

    ngOnInit() {

    }

    showTasks() {
        return JSON.parse(localStorage.getItem("tasks"));
    }

}
