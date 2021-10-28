package com.revature.project2.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.models.CartItem;
import com.revature.project2.models.Purchase;
import com.revature.project2.service.CartService;

@RestController("CartController")
@CrossOrigin
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@PostMapping(value = "/addToCart")
	public void addCartItem(@RequestBody CartItem ci, HttpServletResponse response) {
		System.out.println(ci.toString());
		
		if(cartService.addCartItem(ci)) {
			response.setStatus(201);
		}else {
			response.setStatus(400);
		}
	}
	
	@GetMapping(value = "/getCartItem/{sku}")
	public CartItem getCartItem(@PathVariable("userId") int userId, @PathVariable("sku") int sku) {
		
		return cartService.getCartItem(userId, sku);
		
	}
	
	@GetMapping(value = "/getCart")
	public List<CartItem> getCart(@PathVariable("userId") int userId) {
		
		return cartService.getCart(userId);
		
	}

}
