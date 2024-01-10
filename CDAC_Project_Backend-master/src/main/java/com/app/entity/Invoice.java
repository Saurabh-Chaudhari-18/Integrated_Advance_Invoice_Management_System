package com.app.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "invoice")
public class Invoice {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoice_id")
    private int invoice_id;
	
	@Column(name = "invoice_recurring_cycle", nullable = true)
	private String invoice_recurring_cycle;
	
	@Column(name = "issue_date", nullable = false)
	private String issue_date;
	
	@Column(name = "due_date", nullable = false)
	private String due_date;
	
	@Column(name = "amount_total", nullable = false)
	private int amount_total;
	
	@Column(name = "amount_paid", nullable = false)
	private int amount_paid;
	
	@Column(name = "amount_due", nullable = false)
    private int amount_due;	
    
	@Column(name = "client_name", nullable = false)
    private String client_name;
	
	@Column(name ="status",nullable=false)
	private String status;
  
	
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    
//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;
    
    
    @OneToMany(mappedBy = "invoice")
    @JsonIgnore
    private List<Payment> payment;
    
    

	public int getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}

	public String getInvoice_recurring_cycle() {
		return invoice_recurring_cycle;
	}

	public void setInvoice_recurring_cycle(String invoice_recurring_cycle) {
		this.invoice_recurring_cycle = invoice_recurring_cycle;
	}

	public String getIssue_date() {
		return issue_date;
	}

	public void setIssue_date(String issue_date) {
		this.issue_date = issue_date;
	}

	public String getDue_date() {
		return due_date;
	}

	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}

	public int getAmount_total() {
		return amount_total;
	}

	public void setAmount_total(int amount_total) {
		this.amount_total = amount_total;
	}

	public int getAmount_paid() {
		return amount_paid;
	}

	public void setAmount_paid(int amount_paid) {
		this.amount_paid = amount_paid;
	}

	public int getAmount_due() {
		return amount_due;
	}

	public void setAmount_due(int amount_due) {
		this.amount_due = amount_due;
	}

	public String getClient_name() {
		return client_name;
	}

	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}

	public Client getClient_id() {
		return client;
	}

	public void setClient_id(Client client) {
		this.client = client;
	}

//	public Product getProduct_id() {
//		return product;
//	}
//
//	public void setProduct_id(Product product_id) {
//		this.product = product_id;
//	}

	public List<Payment> getPayment() {
		return payment;
	}

	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}
	
	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
    
    public Invoice(int invoice_id, String invoice_recurring_cycle, String issue_date, String due_date, int amount_total,
			int amount_paid, int amount_due, String client_name, String status, Client client, Product product,
			List<Payment> payment) {
		super();
		this.invoice_id = invoice_id;
		this.invoice_recurring_cycle = invoice_recurring_cycle;
		this.issue_date = issue_date;
		this.due_date = due_date;
		this.amount_total = amount_total;
		this.amount_paid = amount_paid;
		this.amount_due = amount_due;
		this.client_name = client_name;
		this.status = status;
		this.client = client;
//		this.product = product;
		this.payment = payment;
	}

	public Invoice() {}

	@Override
	public String toString() {
		return "Invoice [invoice_id=" + invoice_id + ", invoice_recurring_cycle=" + invoice_recurring_cycle
				+ ", issue_date=" + issue_date + ", due_date=" + due_date + ", amount_total=" + amount_total
				+ ", amount_paid=" + amount_paid + ", amount_due=" + amount_due + ", client_name=" + client_name
				+ ", client=" + client + ", payment=" + payment + "]";
	}
    
    
    
}
