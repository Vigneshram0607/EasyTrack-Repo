import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

// type ALIASES
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// Interface
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports:[CardComponent],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // @Input('name') name!: string;
  // @Input('id') id!: string;
  // @Input('avatar') avatar!: string;


  @Input({required: true}) user!: User
  @Output('selectedUser') selectedUser = new EventEmitter();
  @Input() isUserSelected!: boolean;

  userColl: any = DUMMY_USERS;

  constructor() { }

  ngOnInit(): void {}

  get imagePath(){
    // return `../../assets/users/${this.avatar}`;
    return `../../assets/users/${this.user.avatar}`;
  }

  onSelectUser(){
    // this.selectedUser.emit(this.id);
    this.selectedUser.emit(this.user.id);
  }

}
