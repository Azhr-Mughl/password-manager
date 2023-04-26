import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordsListComponent } from './components/passwords-list/passwords-list.component';
import { AddEditPasswordComponent } from './components/add-edit-password/add-edit-password.component';

const routes: Routes = [
  { path: 'passwords', component: PasswordsListComponent },
  { path: 'password/:id', component: AddEditPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
