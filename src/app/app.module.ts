import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AguinaldoComponent } from './components/aguinaldo/aguinaldo.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FormComponent,
    HeaderComponent,
    AguinaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
