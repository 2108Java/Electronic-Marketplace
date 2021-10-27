package com.revature.project2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.repo.PurchasedItemsDAO;

@Service
public class PurchaseService {
	
	@Autowired
	PurchasedItemsDAO purchasedItemsDAO;
	
	

}
