package com.shopforhome.user.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CustomerLogin {

	@Id
	private String customer_email;
	
	private String customer_password;
	public CustomerLogin() {
		super();
	}
	public CustomerLogin(String customer_email, String customer_password) {
		super();
		this.customer_email = customer_email;
		this.customer_password = customer_password;
	}
	public String getEmail() {
		return customer_email;
	}
	public void setEmail(String email) {
		this.customer_email = email;
	}
	public String getPassword() {
		return customer_password;
	}
	public void setPassword(String password) {
		this.customer_password = password;
	}
	@Override
	public String toString() {
		return "CustomerLogin [customer_email=" + customer_email + ", customer_password=" + customer_password + "]";
	}
	
	
}
