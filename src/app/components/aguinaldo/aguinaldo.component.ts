import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aguinaldo',
  templateUrl: './aguinaldo.component.html',
  styleUrls: ['./aguinaldo.component.css']
})
export class AguinaldoComponent implements OnInit {

    salary:number = 0;
    years:number = 0;
    days:number = 0;

    calculatedResults = {
        salary: 0,
        years: 0,
        days: 0,
        paidAmount: 0
    }

  constructor() { }

  ngOnInit() {
  }

  calculateBonus() {
    let validated = true;
    if(this.salary == 0){
        document.getElementById("salary").classList.add("is-invalid");
        document.getElementById("salary_invalid").innerHTML = "The salary must be greater than zero.";   
        validated = false;
    }else {
        validated = true;
        document.getElementById("salary").classList.remove("is-invalid");
    }
    
    if(this.years > 34) {
        document.getElementById("years").classList.add("is-invalid");
        document.getElementById("years_invalid").innerHTML = "The years worked must be less than 35";
        validated = false;
    }else {
        validated = true;
        document.getElementById("years").classList.remove("is-invalid");
    }
    
    if(this.days == 0 && this.years == 0 || this.days > 365 || this.years > 35) {
        validated = false;
        document.getElementById("days").classList.add("is-invalid");
        document.getElementById("days_invalid").innerHTML = "The days worked must be greater than zero and less than 365";
    }else {
        validated = true;
        document.getElementById("days").classList.remove("is-invalid");        
    }

    if(validated) { 
        let aguinaldo = 0;
        if(this.years == 0) {
            let base_salary = (this.salary / 30) * 15;
            aguinaldo = (base_salary * this.days) / 365;
        }else if(this.years <= 3) {
            aguinaldo = (this.salary / 30) * 15;
        }else if(this.years <= 10) {
            aguinaldo = (this.salary / 30) * 19;
        }else{
            aguinaldo = (this.salary / 30) * 21;
            
        }

        document.getElementById("hidden").classList.remove("d-none");

        this.calculatedResults.days = this.days;
        this.calculatedResults.years = this.years;
        this.calculatedResults.salary = this.salary;
        this.calculatedResults.paidAmount = aguinaldo;

        this.salary = this.years = this.days = 0;
    }
  }

  cleanIt() {
    this.salary = this.years = this.days = 0;
    document.getElementById("hidden").classList.add("d-none");
    let inputs = document.getElementsByTagName('input');

    for(let x = 0; x < inputs.length; x++) {
        if(inputs[x].type == 'number') inputs[x].classList.remove("is-invalid");
    }
  }

}
