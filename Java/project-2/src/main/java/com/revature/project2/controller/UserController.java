package com.revature.project2.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.models.User;
import com.revature.project2.service.UserService;

@RestController("UserController")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService uServ;
	
	@GetMapping(value = "/hello")
	public String hello() {
		return "Hello";
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
}
