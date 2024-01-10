package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entity.User;
@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	
	@Query(nativeQuery = true,value ="select * from user where email = :username and password= :pass")
	User authenticateUser(@Param("username") String userName,@Param("pass") String pass);
	
	
}
