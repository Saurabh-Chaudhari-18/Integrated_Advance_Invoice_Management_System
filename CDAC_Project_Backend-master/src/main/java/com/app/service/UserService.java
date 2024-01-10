package com.app.service;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.entity.AuthenticateObject;
import com.app.entity.User;

import net.bytebuddy.implementation.bytecode.Throw;

@Service
@Transactional
public class UserService {
	@Autowired
	private UserDao user;

	public List<User> getAllUsers() {
		System.out.println("in service");
		return user.findAll();
	}

	public User getSingleUser(int id) {
		return user.getReferenceById(id);
	}

	public User createUser(User userData) {
		return user.save(userData);
	}

	public User updateUser(User data) {

		User selectedUser = user.getReferenceById(data.getId());

		if (data.getName() != null) {
			selectedUser.setName(data.getName());
		}
		if (data.getEmail() != null) {
			selectedUser.setEmail(data.getEmail());
		}
		if (data.getStatus() != null) {
			selectedUser.setStatus(data.getStatus());
		}
		if (data.getPhone() != null) {
			selectedUser.setPhone(data.getPhone());
		}
		if (data.getState() != null) {
			selectedUser.setState(data.getState());
		}
		if (data.getPostalCode() != null) {
			selectedUser.setPostalCode(data.getPostalCode());
		}
		if (data.getCountry() != null) {
			selectedUser.setCountry(data.getCountry());
		}
		if (data.getAddress() != null) {
			selectedUser.setAddress(data.getAddress());
		}
		if (data.getIsAdmin() == true) {
			selectedUser.setIsAdmin(data.getIsAdmin());
		}

		return user.save(selectedUser);
	}

	public User deleteUser(int id) throws EmptyResultDataAccessException {
		User u = user.getReferenceById(id);
		user.deleteById(id);
		return u;

	}
	
	public User authenticateUser(String userName,String password) throws EntityNotFoundException {
		User u=user.authenticateUser(userName,password);
		if(u!=null) {
			return u;
		}
		else {
			
		return null;
		}
	}
}
