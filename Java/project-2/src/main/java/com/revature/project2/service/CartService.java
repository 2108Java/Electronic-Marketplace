package com.revature.project2.service;

import java.util.List;

import org.apache.catalina.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.models.CartItem;
import com.revature.project2.repo.CartDAO;

@Service
public class CartService {
	
	@Autowired
	CartDAO cartDao;
	
	public List<CartItem> viewAllUsers(int userId){
		
		
		
		return cartDao.viewCart(userId);
	}

}
