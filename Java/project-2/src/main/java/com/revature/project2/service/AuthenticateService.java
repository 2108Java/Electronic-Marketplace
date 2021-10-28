package com.revature.project2.service;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.project2.models.User;
import com.revature.project2.repo.UserDAO;

//@Aspect
//@Configuration
@Service
public class AuthenticateService {
	@Autowired
	private UserDAO userDao;
	
//	@Before("execution(* *(..))")
//	public void authenticateSession(JoinPoint jp) {
//		
//		
//		
//	}
	
	public boolean authenticateUser(String username, String password) {
		boolean authenticated = false;
		
		if(userDao.existsByName(username));
			System.out.println("Inside 'authenticateUser' service");
			User temp = userDao.selectUserByUsername(username);
		
			if(temp.getPassword().equals(password)){
				authenticated = true;
			}
		
		System.out.println("Inside 'authenticateUser' authenticate = "+authenticated);
		return authenticated;
		
	}

}
