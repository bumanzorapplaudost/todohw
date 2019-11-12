import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aguinaldo',
  templateUrl: './aguinaldo.component.html',
  styleUrls: ['./aguinaldo.component.css']
})
export class AguinaldoComponent implements OnInit {

    salary:number = 0;
    years:number = 0;
    days:number = 1;

  constructor() { }

  ngOnInit() {
  }

  calculateBonus() {

    if(this.salary == 0){
        console.log("Entered");
        document.getElementById("salary").classList.add("is-invalid");
        document.getElementById("salary_invalid").innerHTML = "The salary must be greater than zero.";   
    }else if(this.years > 34) {
        document.getElementById("years").classList.add("is-invalid");
        document.getElementById("years_invalid").innerHTML = "The years worked must be less than 35";
    }else if(this.days == 0 || this.days > 365) {
        document.getElementById("days").classList.add("is-invalid");
        document.getElementById("days_invalid").innerHTML = "The days worked must be greater than zero and less than 365";
    }else {
        document.getElementById("days").classList.remove("is-invalid");
        document.getElementById("salary").classList.remove("is-invalid");
        document.getElementById("years").classList.remove("is-invalid");
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
        let result = `
            <h4 class="text-center">Calculo de Aguinaldo</h4>
            <div class="row">
                <div class="col-sm-6"><b>Salario Base: </b></div>
                <div class="col-sm-6">\$${this.salary}</div>
                <div class="col-sm-6"><b>Años Trabajados: </b></div>
                <div class="col-sm-6">${this.years}</div>
                <div class="col-sm-6"><b>Dias Trabajados: </b></div>
                <div class="col-sm-6">${this.days}</div>
                <div class="col-sm-12">&nbsp;</div>
                <div class="col-sm-6"><b>Aguinaldo:</b></div>
                <div class="col-sm-6">\$${aguinaldo.toFixed(2)}</div>
            </div>
        `;

        document.getElementById("results").innerHTML = result;
        this.salary = this.years = this.days = 0;
 
    }
    

  }

}
