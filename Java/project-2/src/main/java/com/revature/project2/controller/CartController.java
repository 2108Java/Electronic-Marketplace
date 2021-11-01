package com.revature.project2.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.models.CartItem;
import com.revature.project2.models.User;
import com.revature.project2.service.CartService;
import com.revature.project2.service.UserService;

@RestController("CartController")
@CrossOrigin(origins = "http://localhost:4402", allowCredentials = "true") 
public class CartController {
	
	@Autowired
	private CartService cService;
	@Autowired
	private UserService uService;
	
	@PostMapping(value = "/addToCart")
	public CartItem addCartItem(@RequestBody CartItem ci, HttpServletResponse response, HttpSession session) {
		//System.out.println(ci.toString());
		User u = null;
		//create empty list
		//List<CartItem> newItems = new ArrayList<>();
		//add cart item to new list
		//newItems.add(ci);
		//get user from db
		//User existingUser= uService.getAllUsers(ci.getUserId());
		
		//User existingUser = uService.getUserByUsername(username);
		//set cart item to users list
		//existingUser.setCartItems(newItems);
		//System.out.println(existingUser.toString());
		//update user
		//uService.addUser(existingUser)
		
		u = (User) session.getAttribute("user");
		//System.out.println(u.toString());
		ci.setUser(u);
	
		if(cService.addCartItem(ci)) {
			response.setStatus(201);
		}else {
			response.setStatus(400);
		}
		
		return ci;
	}
	
	@GetMapping(value = "/getCartItem/{sku}")
	public CartItem getCartItem(@PathVariable("userId") int userId, @PathVariable("sku") int sku) {
		
		return cService.getCartItem(userId, sku);
		
	}
	
	@GetMapping(value = "/getCart/{userId}")
	public List<CartItem> getCart(@PathVariable("userId") Integer userId) {
		
		return cService.getCart(userId);
		
	}
	
	@PostMapping(value = "/removeFromCart")
	public void removeCartItem(@RequestBody CartItem ci, HttpServletResponse response) {
		
		cService.deleteCartItem(ci);
		
	}

}
