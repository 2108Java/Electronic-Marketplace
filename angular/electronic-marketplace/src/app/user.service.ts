import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'withCredentials': 'true', 'observe': 'response' as 'response'})//, 'observe': 'response' as 'response'})
  };
  constructor(private myHttpClient: HttpClient) { }


loginRequest(currentUser: User): Observable<HttpResponse<User>>{
  //console.log(currentUser);
  return this.myHttpClient.post<User>("http://localhost:8081/login",currentUser, {withCredentials: true,observe: 'response' as 'response'});
  //return this.myHttpClient.post<User>("http://ec2-13-59-174-104.us-east-2.compute.amazonaws.com:8081/login",currentUser, {withCredentials: true,observe: 'response' as 'response'});
  
};

checkSession(): Observable<User>{
  console.log("running checkSession");
  return this.myHttpClient.get<User>("http://localhost:8081/checkSession", {withCredentials: true});
  //return this.myHttpClient.get<User>("http://ec2-13-59-174-104.us-east-2.compute.amazonaws.com:8081/checkSession", {withCredentials: true});
}


logout(): Observable<User>{
  console.log("logging user out");
  return this.myHttpClient.get<User>("http://localhost:8081/logout", {withCredentials: true});
  //return this.myHttpClient.get<User>("http://ec2-13-59-174-104.us-east-2.compute.amazonaws.com:8081/logout", {withCredentials: true});
}

checkSessionBoolean(): Observable<boolean>{
  console.log("running checkSessionBoolean");
  return this.myHttpClient.get<boolean>("http://localhost:8081/checkSessionBoolean", {withCredentials: true});
  // return this.myHttpClient.get<boolean>("http://ec2-13-59-174-104.us-east-2.compute.amazonaws.com:8081/checkSessionBoolean", {withCredentials: true});
}

}