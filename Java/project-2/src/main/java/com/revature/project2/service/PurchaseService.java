package com.revature.project2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.models.Purchase;
import com.revature.project2.repo.PurchasedItemsDAO;

@Service
public class PurchaseService {
	
	@Autowired
	private PurchasedItemsDAO pDao;
	
	public boolean addPurchase(List<Purchase> p) {
		
		return pDao.addPurchase(p);
		
	}
	
	public List<Purchase> getPurchaseList(int userId){
		
		return pDao.getPurchaseList(userId);
	}
	
	public Purchase getPurchase(int userId, int sku) {
		
		return pDao.getPurchase(userId, sku);
		
	}
	

}
