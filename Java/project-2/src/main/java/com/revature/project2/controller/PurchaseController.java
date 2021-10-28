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

import com.revature.project2.models.Purchase;
import com.revature.project2.models.User;
import com.revature.project2.service.PurchaseService;

@RestController("PurchaseController")
@CrossOrigin
public class PurchaseController {
	
	@Autowired
	private PurchaseService purchaseService;
	
	@PostMapping(value = "/purchase")
	public void addPurchase(@RequestBody Purchase p, HttpServletResponse response) {
		System.out.println(p.toString());
		
		if(purchaseService.addPurchase(p)) {
			response.setStatus(201);
		}else {
			response.setStatus(400);
		}
	}
	
	@GetMapping(value = "/getPurchase/{sku}")
	public Purchase getPurchase(@PathVariable("userId") int userId, @PathVariable("sku") int sku) {
		
		return purchaseService.getPurchase(userId, sku);
		
	}
	
	@GetMapping(value = "/getAllPurchases")
	public List<Purchase> getPurchaseList(@PathVariable("userId") int userId){
		
		return purchaseService.getPurchaseList(userId);
	}
	
	

}
