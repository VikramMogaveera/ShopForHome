package com.shopforhome.user.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopforhome.user.bean.Customer;
import com.shopforhome.user.bean.CustomerLogin;
import com.shopforhome.user.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public boolean insertCustomer(Customer customer) {
		if(!this.customerRepository.existsById(customer.getCustomer_email())) {
			this.customerRepository.save(customer);
			return true;
		}
		return false;
	}
	
	public boolean updateCustomer(Customer customer) {
		if(this.customerRepository.existsById(customer.getCustomer_email())) {
			this.customerRepository.save(customer);
			return true;
		}
		return false;
	}
	
	public List<Customer> getAllCustomers() {
		List<Customer> customers = new ArrayList<>();
		this.customerRepository.findAll().forEach(customer->customers.add(customer));
		return customers;

	}
	
	public boolean deleteCustomer(String email) {
		this.customerRepository.deleteById(email);
		return true;
	}
	
	//login validation
	public boolean loginValidate(Customer customer) {
		String password = this.customerRepository.findById(customer.getCustomer_email()).get().getCustomer_password();
		if(password.equals(customer.getCustomer_password())) {
			return true;
		}
		return false;
	}
	public Customer getByEmail(String email) {
		return this.customerRepository.findById(email).get();
	}
	
}

