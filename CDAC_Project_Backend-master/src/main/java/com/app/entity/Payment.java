package com.app.entity;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "payment")
public class Payment {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "payment_id")
	    private int payment_id;
	    
	    @Column(name = "payment_method", nullable = false)
	    private String payment_method;
	    
	    @Column(name = "payment_amount", nullable = false)
	    private int payment_amount;
	    
	    @Column(name = "payment_note", nullable = true)
	    private String payment_note;
	    
	    @Column(name = "issue_date", nullable = false)
	    private String issue_date;
	 
	    @Column(name = "client_name", nullable = false)
	    private String client_name;
	    
	    @ManyToOne
	   
	    @JoinColumn(name = "invoice_id")
	    private Invoice invoice;
	    
	    @ManyToOne
	    
	    @JoinColumn(name = "client_id")
	    private Client client;

		public int getPayment_id() {
			return payment_id;
		}

		public void setPayment_id(int payment_id) {
			this.payment_id = payment_id;
		}

		public String getPayment_method() {
			return payment_method;
		}

		public void setPayment_method(String payment_method) {
			this.payment_method = payment_method;
		}

		public int getPayment_amount() {
			return payment_amount;
		}

		public void setPayment_amount(int payment_amount) {
			this.payment_amount = payment_amount;
		}

		public String getPayment_note() {
			return payment_note;
		}

		public void setPayment_note(String payment_note) {
			this.payment_note = payment_note;
		}

		public String getIssue_date() {
			return issue_date;
		}

		public void setIssue_date(String issue_date) {
			this.issue_date = issue_date;
		}

		public String getClient_name() {
			return client_name;
		}

		public void setClient_name(String client_name) {
			this.client_name = client_name;
		}

		public Invoice getInvoice_id() {
			return invoice;
		}

		public void setInvoice_id(Invoice invoice_id) {
			this.invoice= invoice_id;
		}

		public Client getClient_id() {
			return client;
		}

		public void setClient_id(Client client) {
			this.client = client;
		}

		public Payment(int payment_id, String payment_method, int payment_amount, String payment_note, String issue_date,
				String client_name, Invoice invoice_id, Client client) {
			super();
			this.payment_id = payment_id;
			this.payment_method = payment_method;
			this.payment_amount = payment_amount;
			this.payment_note = payment_note;
			this.issue_date = issue_date;
			this.client_name = client_name;
			this.invoice = invoice_id;
			this.client = client;
		}
		
		public Payment() {}

		@Override
		public String toString() {
			return "Payment [payment_id=" + payment_id + ", payment_method=" + payment_method + ", payment_amount="
					+ payment_amount + ", payment_note=" + payment_note + ", issue_date=" + issue_date
					+ ", client_name=" + client_name + ", invoice_id=" + invoice + ", client=" + client + "]";
		}
	    
	    
}
