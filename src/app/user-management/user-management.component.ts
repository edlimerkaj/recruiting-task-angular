import { UserManagementService } from './user-management.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../types/user.types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  private usersSub: Subscription | undefined;

  users: User[] = [];
  isLoading: boolean = true;

  newUserForm: FormGroup = new FormGroup({
    // TODO: complete FormGroup with the following fields:
    // email      - mandatory field, email field
    // firstName  - mandatory field
    // lastName   - mandatory field
  });

  get email() {
    return this.newUserForm?.get('email');
  }

  get firstName() {
    return this.newUserForm?.get('firstName');
  }

  get lastName() {
    return this.newUserForm?.get('lastName');
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {
    // TODO: prefill input fields with data from potential URL query parameters
    // (URL parameters are optional; possible parameters: "email", "firstName", "lastName")


    // TODO: subscribe to events from service


    // TODO: load initial users from data store via service

  }

  onSubmitNewUserForm() {
    if (this.newUserForm?.invalid) {
      console.log('Invalid form data');
      return;
    }

    this.isLoading = true;

    // TODO: insert a new user into the data store via service

  }

  ngOnDestroy(): void {
    this.usersSub?.unsubscribe();
  }

}
