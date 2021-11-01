package com.revature.project2.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.models.User;
import com.revature.project2.repo.UserDAO;

@Service
public class UserService {
	@Autowired
	private UserDAO userDao;
	
	public boolean addUser(User u) {
		boolean created = false;
		System.out.println("running update user from user service");
		//if(userDao.existsByName(u.getUsername())) {
			userDao.addUser(u);
			created = true;
		//}
		
		return true;
	}
	
	//public List<User> viewAllUsers(){
		
		
	//	return userDao.viewAll();
	//}
	
	public User getUserByUsername(String username) {
		return userDao.getUserByUsername(username);
	}
	
	public User getAllUsers(int id) {
		return userDao.getAllUsers(id);
	}
}
