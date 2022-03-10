# Node.js Recruiting Task

## Description
This repository contains a simple Angular project, that simulates a minimalistic user management admin panel with functionality for adding to and displaying a list of users.

<br>

After cloning the repository, install the package dependencies by running:

```console
npm install
```

<br>

To start the project in development mode, run:

```console
npm serve
```

This will start a development server which - per default - serves the Angular app under [localhost:4200](http://localhost:4200).

<br>

## Task
The places where code has to be written by you are marked with `TODO` comments.

You have to complete the [user management component](./src/app/user-management/), which shows a list of all users currently stored and allows the end-user to add new entries to that list. Furthermore, you need to implement the functionality of the [user management service](./src/app/user-management/user-management.service.ts) which is responsible for providing data to the component.

Note that in place of a connection to a real backend API, this project simply uses a [datastore module](./src/app/data/amazing-data-store.ts) that contains a static array of users and exposes functions for getting and inserting users.

### Service

In the [user management service](./src/app/user-management/user-management.service.ts), you need to implement two functions.

The first one is supposed to get a list of all users from the [datastore module](./src/app/data/amazing-data-store.ts) and distribute that data via the rxjs Subject which is already contained in the service.

The second function should take a User object as an input parameter, insert it into the datastore and then again distribute the returned user list (containing the inserted user) via the Subject.

### Component Code

The [user management component](./src/app/user-management/) uses Angular Reactive Forms for the user creation form. In the component's [code file](./src/app/user-management/user-management.component.ts), you need to complete the FormGroup to contain the following fields:

- email
  - validate: mandatory field, email field
- firstName
  - validate: mandatory field
- lastName
  - validate: mandatory field

In the initializer function, implement the following features:

- read optional prefill values for all input fields from URL query parameters
- subscribe to user data from the [user management service](./src/app/user-management/user-management.service.ts)
- load a list of initial users from the [user management service](./src/app/user-management/user-management.service.ts)

Lastly, you need to implement the function that creates a new user when the form is submitted, using the [user management service's](./src/app/user-management/user-management.service.ts) functionality from the previous step.

### Component Template

The [component template](./src/app/user-management/user-management.component.html) already contains a form with all necessary input fields. Your task is to hook up the form to the FormGroup you set up in the previous part of the task.

Also, you have to complete the table which is supposed to show the list of users.

#
# Good luck with the task!
