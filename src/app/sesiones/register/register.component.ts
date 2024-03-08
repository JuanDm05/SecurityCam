import { Component } from '@angular/core';
import { UsersService } from '../../servicios/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  users: Users[]=[];



  constructor(private usersService: UsersService) {}


 // ngOnInit(): void {
 //   this.usersService.getUsers().subscribe((result: Users[]) => (this.users = result));
  //}


}