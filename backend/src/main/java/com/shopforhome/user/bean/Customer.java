package com.shopforhome.user.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
	
	@Id
	private String customer_email;
	
	private String customer_name;
	
	private int age;
	
	private String gender;
	
	private String mob_no;
	
	private String customer_password;
	
	

	public Customer() {
		super();
	}

	
	public Customer(String customer_email, String customer_name, int age, String gender, String mob_no,
			String customer_password) {
		super();
		this.customer_email = customer_email;
		this.customer_name = customer_name;
		this.age = age;
		this.gender = gender;
		this.mob_no = mob_no;
		this.customer_password = customer_password;
	}


	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMob_no() {
		return mob_no;
	}

	public void setMob_no(String mob_no) {
		this.mob_no = mob_no;
	}

	public String getCustomer_email() {
		return customer_email;
	}

	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}

	public String getCustomer_password() {
		return customer_password;
	}

	public void setCustomer_password(String customer_password) {
		this.customer_password = customer_password;
	}


	@Override
	public String toString() {
		return "Customer [customer_email=" + customer_email + ", customer_name=" + customer_name + ", age=" + age
				+ ", gender=" + gender + ", mob_no=" + mob_no + ", customer_password=" + customer_password + "]";
	}
	
}
