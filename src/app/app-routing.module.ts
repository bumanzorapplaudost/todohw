import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from "../app/components/tasks/tasks.component";
import { AguinaldoComponent } from "../app/components/aguinaldo/aguinaldo.component";


const routes: Routes = [
    {
        path: "", 
        component: TasksComponent
    },
    {
        path: "aguinaldo",
        component: AguinaldoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
