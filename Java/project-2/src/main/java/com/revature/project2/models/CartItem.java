package com.revature.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart_table")
public class CartItem {
	
	@Id 
	@Column
	@GeneratedValue
	private int cartId;
	
	@ManyToOne
	@JoinColumn(name = "user_id_fk")
	private User user;
	
	@Column(name = "sku") 
	private int sku;

	public CartItem(int cartId, int sku) {
		super();
		this.cartId = cartId;
		this.sku = sku;
	}

	public CartItem() {
		super();
	}

	public int getPurchaseId() {
		return cartId;
	}

	public void setPurchaseId(int purchaseId) {
		this.cartId = purchaseId;
	}

	public int getSku() {
		return sku;
	}

	public void setSku(int sku) {
		this.sku = sku;
	}
	
	public void setUser(User user) {
		this.user = user;
	}
	
	
	
	@Override
	public String toString() {
		return "CartItem [cartId=" + cartId + ", sku=" + sku + ", userId="+ user.toString() +"]";
	}

}