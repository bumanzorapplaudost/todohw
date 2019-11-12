import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";

import { Task } from "../../models/Task";


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    @Input() task:Task; 
    
    //The output should send send an event to the tasks list to update the table
    @Output() taskAdded: EventEmitter<any> = new EventEmitter();

    //Declaring form fields
    id:string = "";
    description:string = "";
    assignee:string;
    status:boolean;

    constructor() { }

    ngOnInit() {
    }

    //Event Triggered when clicking the Create Task button
    addTodo() {

        let date = new Date();

        if(this.description.length <= 100 && this.description != "") {

            //Temporarily changing the button class
            document.querySelector("#description").classList.remove("is-invalid");
            document.querySelector("#btn_submit").classList.remove("btn-dark");
            document.querySelector("#btn_submit").classList.add("btn-default");

            //Get 
            let currentTasks = JSON.parse(localStorage.getItem("tasks"));
            let newID = this.id.trim() == "" ? this.getLastID(currentTasks) + 1 : this.id.trim();

            let task = {
                id: newID,
                task: this.description,
                assignee: this.assignee,
                creation_date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
                status: this.status,
            }

            if(this.id.trim() != "") {
                //if the record exists then return the rest of them but the one we're editing.
                currentTasks = currentTasks.filter(t => {
                    return t.id !== this.id.trim();
                });
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
