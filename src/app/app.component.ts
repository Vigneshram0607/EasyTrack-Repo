import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, UserComponent, TasksComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'myapp';

  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(item => item.id === this.selectedUserId)!;
    // The exclamation mark (!) is the non-null assertion operator in TypeScript.
    // It tells the compiler that the value preceding it will not be null or undefined at runtime.
    // In this case, it's used because 'find' could potentially return undefined if no matching user is found.
    // By using '!', we're asserting that a user with the 'selectedUserId' will always exist in the 'users' array.
  }
  onSelectUser(id: string){
    console.log('SELECTED USER ID : ',id)
    this.selectedUserId = id;
    
  }
}
