package com.revature.project2.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.models.User;
import com.revature.project2.repo.UserDAO;

@Service
public class UserService {
	@Autowired
	private UserDAO userDao;
	
	public boolean addUser(User u) {
		return userDao.insertUser(u);
	
	}
}
