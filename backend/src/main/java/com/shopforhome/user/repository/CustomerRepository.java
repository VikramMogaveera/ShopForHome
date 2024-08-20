package com.shopforhome.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopforhome.user.bean.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{

}
