import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../types/user.types';
import * as DATA from '../data/amazing-data-store';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private usersListener: Subject<User[]> = new Subject<User[]>();

  getUsersListener() {
    return this.usersListener.asObservable();
  }

  constructor() { }

  // TODO: get a list of all users
  getAllUsers(){
    DATA.getAllUsers().then(res => this.usersListener.next(res))
  }

  // TODO: insert new user into the list
  addNewUser(user: User){
    DATA.insertNewUser(user).then(res => this.usersListener.next(res))
  }
}
