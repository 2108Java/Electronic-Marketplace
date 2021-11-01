package com.revature.project2.controller;

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

import com.revature.project2.models.Purchase;
import com.revature.project2.models.User;
import com.revature.project2.service.PurchaseService;

@RestController("PurchaseController")
@CrossOrigin(origins = "http://localhost:4402", allowCredentials = "true") 
public class PurchaseController {
	
	@Autowired
	private PurchaseService purchaseService;
	
	@PostMapping(value = "/purchase")

	public List<Purchase> addPurchase(@RequestBody List<Purchase> p, HttpServletResponse response, HttpSession session) {

		System.out.println(p.toString());
		
		User u = null;
		
		u = (User) session.getAttribute("user");
		
		for (int i = 0;i < p.size(); i++) {
			Purchase singlePurchase = p.get(i);
			singlePurchase.setUser(u);
			purchaseService.addPurchase(singlePurchase);
		}
		
		
		//if(purchaseService.addPurchase(p)) {
		//	response.setStatus(201);
		//}else {
		//	response.setStatus(400);
		//}
		
		return p;
	}
	
	@GetMapping(value = "/getPurchase/{userId}/{sku}")
	public Purchase getPurchase(@PathVariable("userId") int userId, @PathVariable("sku") int sku) {
		
		return purchaseService.getPurchase(userId, sku);
		
	}
	
	@GetMapping(value = "/getAllPurchases/{userId}")
	public List<Purchase> getPurchaseList(@PathVariable("userId") int userId){
		
		return purchaseService.getPurchaseList(userId);
	}
	
	
	
	

}
