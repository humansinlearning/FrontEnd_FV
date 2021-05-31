import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaInterfaceComponent } from './social-media/media-interface/media-interface.component';
import { RegisteredUserDetailsComponent } from './social-media/registered-user-details/registered-user-details.component';
import { RegisteredUsersComponent } from './social-media/registered-users/registered-users.component';

const routes: Routes = [
  { path: "", redirectTo: "bootcamp", pathMatch:"full"},
  { path: "bootcamp", component: MediaInterfaceComponent},
  { path: "registeredUsers", component: RegisteredUsersComponent},
  { path: 'userDetails', component: RegisteredUserDetailsComponent},
  { path: "**", component:MediaInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
