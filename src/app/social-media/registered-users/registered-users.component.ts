import { RegisteredUsersService } from './../services/registeredUsers.service';
import { Component, OnInit } from '@angular/core';
import { RegisteredUsers } from '../models/registered-users';
import { Observable } from 'rxjs';

@Component({
  selector: 'bootcamp-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users: RegisteredUsers | undefined;

  constructor( private userService: RegisteredUsersService) { }
  userToDisplay: number | undefined = 4;
  displayAll: boolean | undefined;

  ngOnInit(): void {

    this.userService.getRegisteredUsersList().subscribe((user: RegisteredUsers)=>{
      this.users = user;
      console.log(this.users)
    });
  }

  displayAllUsers(){
    if(!this.displayAll){
      this.userToDisplay = this.users?.data.length;
      this.displayAll = true;
    }
    else{
      this.userToDisplay = 4;
      this.displayAll = false;
    }

  }

  printNames(user:any){
    /**
     * TODO write function to get user and display it's details in registered-user-details component
     */
    console.log(user);
  }
}
