package com.revature.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.revature.project2.models.User;
import com.revature.project2.repo.UserDAO;
import com.revature.project2.service.UserService;


@SpringBootApplication
public class Project2Application {

	
	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
		
		
	}

}
