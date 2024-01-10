package com.app.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "client")
public class Client implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private int client_id;
    
    @Column(name = "client_name", nullable = false)
    private String client_name;
    
    @Column(name = "client_email", nullable = false)
    private String client_email;
    
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
	
	@Column(name = "password", nullable = false)
	private String password;
    
    @ManyToOne
    @JoinColumn(name = "admin_id")
    @JsonIgnore
    private Admin admin;
    
    
    @OneToMany(mappedBy = "client")
    @JsonIgnore
    private List<Invoice> invoices;
    
    @OneToMany(mappedBy = "client")
    @JsonIgnore
    private List<Payment> payments;

	public int getClient_id() {
		return client_id;
	}

	public void setClient_id(int client_id) {
		this.client_id = client_id;
	}

	public String getClient_name() {
		return client_name;
	}

	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}

	public String getClient_email() {
		return client_email;
	}

	public void setClient_email(String client_email) {
		this.client_email = client_email;
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

	public Admin getAdmin_id() {
		return admin;
	}
	
	public void setAdmin_id(Admin admin) {
		this.admin = admin;
	}

	public List<Invoice> getInvoices() {
		return invoices;
	}

	public void setInvoices(List<Invoice> invoices) {
		this.invoices = invoices;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}
	
	public Client() {}

	public Client(int client_id, String client_name, String client_email, String status, String phone, String city,
			String state, String country, String postal_code, String address, String password, Admin admin,
			List<Invoice> invoices, List<Payment> payments) {
		super();
		this.client_id = client_id;
		this.client_name = client_name;
		this.client_email = client_email;
		this.status = status;
		this.phone = phone;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postal_code = postal_code;
		this.address = address;
		this.password = password;
		this.admin = admin;
		this.invoices = invoices;
		this.payments = payments;
	}

	@Override
	public String toString() {
		return "Client [client_id=" + client_id + ", client_name=" + client_name + ", client_email=" + client_email
				+ ", status=" + status + ", phone=" + phone + ", city=" + city + ", state=" + state + ", country="
				+ country + ", postal_code=" + postal_code + ", address=" + address + ", password=" + password
				+ ", admin=" + admin + ", invoices=" + invoices + ", payments=" + payments + "]";
	}
		
	
	
    
    
}
