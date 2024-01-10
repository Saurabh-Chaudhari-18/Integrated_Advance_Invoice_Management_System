package com.app.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "admin")
public class Admin implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "admin_id")
	private int admin_id;
	
	@Column(name = "admin_name", nullable = false)
	private String admin_name;
	
	@Column(name = "admin_email", nullable = false)
	private String admin_email;
	
	@Column(name = "status", nullable = false)
	private String status;
	
	@Column(name = "phone", nullable = false)
	private String phone;
	
	@Column(name = "city", nullable = false)
	private String city;
	
	@Column(name = "state", nullable = false)
	private String state;
	
	@Column(name = "country", nullable = false)
	private String country;
	
	@Column(name = "postal_code", nullable = false)
	private String postal_code;
	
	@Column(name = "address", nullable = false)
	private String address;
	
//	@JsonIgnore
	@Column(name = "password", nullable = false)
	private String password;
	
	
	
	@OneToMany(mappedBy  = "admin")
	@JsonIgnore
    private List<Client> clients;

	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

	public String getAdmin_email() {
		return admin_email;
	}

	public void setAdmin_email(String admin_email) {
		this.admin_email = admin_email;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPostal_code() {
		return postal_code;
	}

	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

//	public String getPassword() {
//		return password;
//	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Client> getClients() {
		return clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}
	
	

	public Admin(int admin_id, String admin_name, String admin_email, String status, String phone, String city,
			String state, String country, String postal_code, String address, String password, List<Client> clients) {
		super();
		this.admin_id = admin_id;
		this.admin_name = admin_name;
		this.admin_email = admin_email;
		this.status = status;
		this.phone = phone;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postal_code = postal_code;
		this.address = address;
		this.password = password;
		this.clients = clients;
	}
	
	public Admin() {}

	@Override
	public String toString() {
		return "Admin [admin_id=" + admin_id + ", admin_name=" + admin_name + ", admin_email=" + admin_email
				+ ", status=" + status + ", phone=" + phone + ", city=" + city + ", state=" + state + ", country="
				+ country + ", postal_code=" + postal_code + ", address=" + address + ", password=" + password
				+ ", clients=" + clients + "]";
	}
	
	
	
	
}
