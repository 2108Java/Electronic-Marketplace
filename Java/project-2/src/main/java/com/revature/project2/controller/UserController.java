package com.revature.project2.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.models.User;
import com.revature.project2.service.AuthenticateService;
import com.revature.project2.service.UserService;

@RestController("UserController")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService uServ;
	@Autowired
	private AuthenticateService authServ;
	
	@GetMapping(value = "/user/{name}")
	public User selectUserByName( @PathVariable("name") String name) {
		User existingUser = new User();
		//uServ.selectUserByName(name);
		
		return existingUser;
	}
	
	@PostMapping(value = "/user")
	public void addUser(@RequestBody User u, HttpServletResponse response) {
		System.out.println(u.toString());
		
		if(uServ.addUser(u)) {
			response.setStatus(201);
		}else {
			response.setStatus(400);
		}
	}
	
	@PostMapping(value = "/login")
	public void authenticateUser(@RequestBody User u, HttpSession session, HttpServletResponse response) {
		if(u.getUsername().isEmpty() || u.getPassword().isEmpty()) {
			response.setStatus(400);
			
		}else if(authServ.authenticateUser(u.getUsername(), u.getPassword())) {
			System.out.println("Inside 'authenticateUser'");
			u = uServ.getUserByUsername(u.getUsername());
			
			session.setAttribute("user", u);
			session.setAttribute("access", true);
			
			response.setStatus(200);
		}else {
			response.setStatus(401);
		}
	}
	
	@GetMapping(value = "/logout")
	public void invalidateSession(HttpSession session, HttpServletResponse response) {
		
		session.invalidate(); //this will remove all the attributes from the session!
		response.setStatus(200);
	}
	
	@GetMapping(value = "/checkSession")
	public User validateSession(HttpSession session) {
		
		User u = null;
		
		if(session.getAttribute("user") == null) {
			//login method was not reached first or they've logged out already!
			u = new User();
		}else {
			u = (User) session.getAttribute("user");
		}
		
		return u; //either empty user or an actual user!
	}
	
	@GetMapping(value = "/checkSessionBoolean")
	public Boolean validateWithBoolean(HttpSession session) {
		
		Boolean activeSession = false;
		
		if(session.getAttribute("user") == null) {
			//login method was not reached first or they've logged out already!
			activeSession = false;
		}else {
			activeSession = true;
		}
		
		return activeSession;
		
	}
	
}
