import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    @Output() taskAdded: EventEmitter<any> = new EventEmitter();

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
            document.querySelector("#btn_submit").classList.remove("btn-dark");
            document.querySelector("#btn_submit").classList.add("btn-default");

            let currentTasks = JSON.parse(localStorage.getItem("tasks"));
            let newID = this.getLastID(currentTasks) ? this.getLastID(currentTasks) + 1 : 1;

            let task = {
                id: newID,
                task: this.description,
                assignee: this.assignee,
                creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                status: this.status,
            }

            currentTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(currentTasks));

            this.taskAdded.emit(task);

            setTimeout(function(){
                document.querySelector("#btn_submit").classList.remove("btn-default");
                document.querySelector("#btn_submit").classList.add("btn-dark");
            }, 300)

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

    getLastID(tasks) {
        if(typeof tasks[0] !== "undefined") {
            return tasks.sort((a,b) => {
                return b.id - a.id;
            })[0].id;
        }else {
            return 0;
        }
    }
}
