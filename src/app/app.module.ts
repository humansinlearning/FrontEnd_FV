import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaInterfaceComponent } from './social-media/media-interface/media-interface.component';
import { NavbarComponent } from './social-media/navbar/navbar.component';
import { RegisteredUsersComponent } from './social-media/registered-users/registered-users.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisteredUserDetailsComponent } from './social-media/registered-user-details/registered-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaInterfaceComponent,
    NavbarComponent,
    RegisteredUsersComponent,
    RegisteredUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
