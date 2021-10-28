package com.revature.project2.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "user_table")
public class User {
	
	//@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	@Id
	@Column(name = "user_name", nullable = false, unique = true)
	private String username;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "phone_number", nullable = false)
	private String phoneNumber;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY)
	private List<Purchase> purchaseList;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY)
	private List<CartItem> cart;

	public User(int userId, String username, String password, String phoneNumber, String email) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}
	
	

	public User(String username, String password, String phoneNumber, String email) {
		super();
		this.username = username;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}



	public User() {
		super();
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String isPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", phoneNumber="
				+ phoneNumber + ", email=" + email + "]";
	}
	
	

}