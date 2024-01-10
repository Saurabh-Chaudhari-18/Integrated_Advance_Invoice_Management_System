package com.app.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import net.bytebuddy.implementation.bind.annotation.Default;

@Entity

@Table(name = "user")
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int id;
	@Column(name = "name",nullable = false)
	private String name;
	@Column(name = "email",nullable = false)
	private String email;
	@Column(name = "status",nullable = false)
	private String status;
	@Column(name = "phone",nullable = false)
	private String phone;
	@Column(name = "state",nullable = false)
	private String state;
	@Column(name = "postal_code",nullable = false)
	private String postalCode;
	@Column(name = "country",nullable = false)
	private String country;
	@Column(name = "address",nullable = false)
	private String address;
	@Column(name = "isAdmin",nullable = false)
	private boolean isAdmin;
	@Column(name = "password",nullable = false)
	private String password;
	@Column(name = "city",nullable = false)
	private String city;
	
	@OneToMany(mappedBy = "admin")
	private List<Client> client;


	public User() {
		super();
		System.out.println("User Entity Created");
		
	}

	public User(int id, String name, String email, String status, String phone, String state, String postalCode,
			String country, String address, boolean isAdmin, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.status = status;
		this.phone = phone;
		this.state = state;
		this.postalCode = postalCode;
		this.country = country;
		this.address = address;
		this.isAdmin = isAdmin;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		System.out.println("in getter of entity==>"+this.name); 
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	

	public boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

//	public String getPassword() {
//		return password;
//	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	
	

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", status=" + status + ", phone=" + phone
				+ ", state=" + state + ", postalCode=" + postalCode + ", country=" + country + ", address=" + address
				+ ", isAdmin=" + isAdmin + "]";
	}
	
}
