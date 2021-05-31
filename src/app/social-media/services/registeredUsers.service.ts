import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { RegisteredUsers } from '../models/registered-users';
import { Observable } from "rxjs";
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RegisteredUsersService {

  constructor(private http: HttpClient){

  }

  private usersUrl = 'https://reqres.in/api/users';


  getRegisteredUsersList(): Observable<RegisteredUsers>{
    return this.http.get<RegisteredUsers>(this.usersUrl).pipe(
      map((data: any) => data)
    )
  }
}


