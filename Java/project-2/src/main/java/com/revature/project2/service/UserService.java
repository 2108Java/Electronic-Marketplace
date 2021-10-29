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
	private UserDAO uDao;
	
	public boolean addUser(User u) {
		boolean created = false;
		
		if(uDao.existsByName(u.getUsername())) {
			uDao.addUser(u);
			created = true;
		}
		
		return created;
	}
	
	public List<User> getAllUsers(){
		
		
		return uDao.getAllUsers();
	}
	
	public User getUserByUsername(String username) {
		return uDao.getUserByUsername(username);
	}
}
