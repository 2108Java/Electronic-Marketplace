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
	CartDAO cDao;
	
	public boolean addCartItem(CartItem ci) {
		
		cDao.addCartItem(ci);
		
		return true;
		
	}
	
	public CartItem getCartItem(int userId, int sku) {
		
		return cDao.getCartItem(userId, sku);
		
	}
	
	public List<CartItem> getCart(int userId){

		return cDao.getCart(userId);
	}
	
	public boolean deleteCartItem(CartItem ci) {
		
		cDao.deleteCartItem(ci);
		
		return true;
		
	}
	
	

}
