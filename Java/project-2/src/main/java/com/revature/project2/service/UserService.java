package com.revature.project2.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.models.Purchase;
import com.revature.project2.models.User;
import com.revature.project2.repo.UserDAO;

@Service
public class UserService {
	@Autowired
	private UserDAO userDao;
	
	public boolean addUser(User u) {
		System.out.println("Service: addUser");
		System.out.println(u.toString());
		return userDao.insertUser(u);
	
	}
	
	public List<User> viewAllUsers(){
		
		
		return userDao.viewAll;
	}
}
