import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PasswordsListComponent } from './components/passwords-list/passwords-list.component';
import { AddEditPasswordComponent } from './components/add-edit-password/add-edit-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordsListComponent,
    AddEditPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
