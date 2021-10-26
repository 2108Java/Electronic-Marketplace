package com.revature.project2.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "recent_purchases_table")
public class Purchase {
	
	@Id 
	@Column
	@GeneratedValue
	private int purchaseId;
	
	@ManyToOne
	@JoinColumn(name = "user_id_fk")
	private User user;
	
	@Column(name = "sku") 
	private int sku;

	public Purchase(int purchaseId, int sku) {
		super();
		this.purchaseId = purchaseId;
		this.sku = sku;
	}

	public Purchase() {
		super();
	}

	public int getPurchaseId() {
		return purchaseId;
	}

	public void setPurchaseId(int purchaseId) {
		this.purchaseId = purchaseId;
	}

	public int getSku() {
		return sku;
	}

	public void setSku(int sku) {
		this.sku = sku;
	}

	@Override
	public String toString() {
		return "Purchase [purchaseId=" + purchaseId + ", sku=" + sku + "]";
	}
	
	
	
	

}
