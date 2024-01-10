package com.app.entity;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "product")
public class Product {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int product_id;
	
	@Column(name = "product_image")
	private String product_image;
	
	@Column(name = "product_name", nullable = false)
	private String product_name;
	
	@Column(name = "product_category", nullable = false)
	private String product_category;
	
	@Column(name = "product_price", nullable = false)
	private int product_price;
	
//	@OneToMany(mappedBy = "product")
//	@JsonIgnore
//    private List<Invoice> invoices;

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_image() {
		return product_image;
	}

	public void setProduct_image(String product_image) {
		this.product_image = product_image;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_category() {
		return product_category;
	}

	public void setProduct_category(String product_category) {
		this.product_category = product_category;
	}

	public int getProduct_price() {
		return product_price;
	}

	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}

//	public List<Invoice> getInvoices() {
//		return invoices;
//	}
//
//	public void setInvoices(List<Invoice> invoices) {
//		this.invoices = invoices;
//	}

	public Product(int product_id, String product_image, String product_name, String product_category,
			int product_price, List<Invoice> invoices) {
		super();
		this.product_id = product_id;
		this.product_image = product_image;
		this.product_name = product_name;
		this.product_category = product_category;
		this.product_price = product_price;
//		this.invoices = invoices;
	}
	
	public Product() {}

	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", product_image=" + product_image + ", product_name="
				+ product_name + ", product_category=" + product_category + ", product_price=" + product_price
				 + "]";
	}
	
	
}
