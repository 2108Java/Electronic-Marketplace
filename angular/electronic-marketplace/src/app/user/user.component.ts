import { Component, OnInit, NgModule} from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  //let currenUser: User();
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  uname: string = "";
  pwd: string = "";

  login(){
    //console.log(this.uname, this.pwd);

    let currentUser: User = {
      username: this.uname,
      password: this.pwd, 
      userId: 0,
      email: "",
      phoneNumber: ""
      }

    this.userService.loginRequest(currentUser).subscribe(
      response => {
        console.log(response);

        //currentUser = response.body
        //currentUser.email = response.body.email;
        //currentUser.userId = response.body.userId;
        //currentUser.phoneNumber = response.body.phoneNumber;
        console.log(currentUser);

        this.router.navigate(['/home']);
        //console.log(response);
      });
    }

  checkSession(){

    this.userService.checkSession().subscribe(
        response =>{
             //currentUser.setU = response;
              console.log(response);
              console.log(response.userId)
             //console.log(currentUser);
           });
      
    }

  logout(){
    this.userService.logout().subscribe(
      response =>{
        //currentUser.setU = response;
        console.log(response);
        this.router.navigate(['/']);
        //console.log(currentUser);
      });
    }

  
}
