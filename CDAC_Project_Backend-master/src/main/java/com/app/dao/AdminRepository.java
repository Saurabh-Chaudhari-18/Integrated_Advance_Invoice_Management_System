package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entity.Admin;
import com.app.entity.User;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	@Query(nativeQuery = true,value ="select * from admin where admin_email = :username and password= :pass")
	Admin authenticateUser(@Param("username") String userName,@Param("pass") String pass);
	  
	}

