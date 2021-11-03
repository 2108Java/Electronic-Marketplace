import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  uname: string = "";
  pwd: string = "";

  login() {
    let currentUser: User = {
      username: this.uname,
      password: this.pwd,
      userId: 0,
      email: "",
      phoneNumber: ""
    }

    this.userService.loginRequest(currentUser).subscribe(
      response => {
        this.router.navigate(['/categories']);
      });
  }

  checkSession() {

    this.userService.checkSession().subscribe(
      response => {
      });

  }

  logout() {
    this.userService.logout().subscribe(
      response => {
        this.router.navigate(['/']);
      });
  }


}
