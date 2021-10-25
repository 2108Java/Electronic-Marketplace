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
@Table(name = "listed_sales_table")
public class Sale {
	
	@Id
	@Column(name = "sales_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int salesId;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private int userId;
	
	@Column(name = "amount", nullable = false)
	private int amount;
	
	@Column(name = "type", nullable = false)
	private String type;
	
	@Column(name = "description", nullable = false)
	private String description;

	public Sale(int salesId, int userId, int amount, String type, String description) {
		super();
		this.salesId = salesId;
		this.userId = userId;
		this.amount = amount;
		this.type = type;
		this.description = description;
	}

	public Sale() {
		super();

	}

	public int getSalesId() {
		return salesId;
	}

	public void setSalesId(int salesId) {
		this.salesId = salesId;
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
		return "Sale [salesId=" + salesId + ", userId=" + userId + ", amount=" + amount + ", type=" + type
				+ ", description=" + description + "]";
	}
	
	
	
	

}
