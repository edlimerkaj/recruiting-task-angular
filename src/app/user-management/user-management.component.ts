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
    // more than one validator needed for email
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
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
    // subscribe to queryParams from activated route
    this.activatedRoute.queryParams.subscribe(
      params =>{
        if(params['email']){
          this.email?.setValue(params['email'])
        }
        if(params['firstName']){
          this.firstName?.setValue(params['firstName'])
        }
        if(params['lastName']){
          this.lastName?.setValue(params['lastName'])
        }
      } );

    // TODO: subscribe to events from service
    this.usersSub = this.userManagementService.getUsersListener().subscribe(user => {
      if (user) {
        this.users = user;
      } else {
        this.users = [];
      }
    })

    // TODO: load initial users from data store via service
    // use the getAllUsers function from the service
    this.userManagementService.getAllUsers();

  }

  onSubmitNewUserForm() { 
    if (this.newUserForm?.invalid) {
      console.log('Invalid form data');
      return;
    }

    this.isLoading = true;

    // TODO: insert a new user into the data store via service
    // use the addNewUser function from the service
    this.userManagementService.addNewUser({
        email: this.newUserForm.value.email, 
        firstName: this.newUserForm.value.firstName, 
        lastName: this.newUserForm.value.lastName
      });
  }

  ngOnDestroy(): void {
    this.usersSub?.unsubscribe();
  }

}
