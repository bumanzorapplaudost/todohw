import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    description:string = "";
    assignee:string;
    status:boolean;

    constructor() { }

    ngOnInit() {
    }

    addTodo() {
        let date = new Date();

        if(this.description.length <= 100 && this.description != "") {

            document.querySelector("#description").classList.remove("is-invalid");
            let task = {
                id: Math.round(Math.random() * 500),
                task: this.description,
                assignee: this.assignee,
                creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                status: this.status,
            }

            let currentTasks = JSON.parse(localStorage.getItem("tasks"));
            currentTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(currentTasks));

        }else {
            document.querySelector("#description").classList.add("is-invalid");

            if(this.description.trim() == "") {
                document.querySelector("#itd").innerHTML = "The task description field is required."; 
            }
            if(this.description.length > 100) {
                document.querySelector("#itd").innerHTML = "The field <b>must</b> be 100 characters or less.";
            }
        }
    }
}
