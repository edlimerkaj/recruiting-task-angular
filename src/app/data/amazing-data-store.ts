import { User } from '../types/user.types';


let USER_DATA: User[] = [
  { email: 'john.doe@example.com', firstName: 'John', lastName: 'Doe' },
  { email: 'jane.doe@example.com', firstName: 'Jane', lastName: 'Doe' }
];


function getAllUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    // simulate latency
    setTimeout(() => {
      resolve([...USER_DATA]);
    }, 250);
  });
}

function insertNewUser(user: User): Promise<User[]> {
  return new Promise((resolve, reject) => {
    // simulate latency
    setTimeout(() => {
      USER_DATA.push(user);
      resolve([...USER_DATA]);
    }, 250);
  });
}


export {
    USER_DATA,
    getAllUsers,
    insertNewUser
};
