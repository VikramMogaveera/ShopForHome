package com.shopforhome.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopforhome.user.bean.Customer;
import com.shopforhome.user.bean.CustomerLogin;
import com.shopforhome.user.service.CustomerService;


@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private CustomerService customerService;
	
	//Getting all the users
	@GetMapping("/user")
	public List<Customer> getAllCustomers() {
		
		List<Customer> customers = this.customerService.getAllCustomers();
		return customers;
	}
	
	//Adding new user to database
	@PostMapping("/user")
	public boolean registerUser(@RequestBody Customer customer) {
		System.out.println(customer);
		if(this.customerService.insertCustomer(customer)) {
			return true;
		}
		else {
			return false;
		}
	}
	//Updating a existing user
	@PutMapping("/user")
	public boolean updateUser(@RequestBody Customer customer) {
		System.out.println("editing"+customer);
		if(this.customerService.updateCustomer(customer)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	//Delete a user
	@DeleteMapping("/deleteuser/email/{email}")
	public boolean deleteUser(@PathVariable String email) {
		
		if(this.customerService.deleteCustomer(email)) {
			return true;
		}
		return false;
	}
	
	//login of a User
	@PostMapping("/login")
	public boolean loginCustomer(@RequestBody Customer customer) {
		System.out.println(customer);
		if(this.customerService.loginValidate(customer)) {
			return true;
		}
		return false;
		
	}
	//Retrieving user by email
	@GetMapping("/email/{email}")
	public Customer getByEmail(@PathVariable String email) {
		return this.customerService.getByEmail(email);
	}
}
