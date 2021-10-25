package com.revature.models;

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
	@JoinColumn(name = "user_id")
	private int userId;
	
	@Column(name = "amount", nullable = false)
	private int amount;
	
	@Column(name = "type", nullable = false)
	private String type;
	
	@Column(name = "description", nullable = false)
	private String description;

	public Purchase(int purchaseId, int userId, int amount, String type, String description) {
		super();
		this.purchaseId = purchaseId;
		this.userId = userId;
		this.amount = amount;
		this.type = type;
		this.description = description;
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

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Purchase [purchaseId=" + purchaseId + ", userId=" + userId + ", amount=" + amount + ", type=" + type
				+ ", description=" + description + "]";
	}
	
	

}
