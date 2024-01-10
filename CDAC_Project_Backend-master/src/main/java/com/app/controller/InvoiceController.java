package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entity.Invoice;
import com.app.service.InvoiceService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class InvoiceController {

	@Autowired
	private InvoiceService invoiceService;

	@GetMapping("/invoices/{id}")
	public ResponseEntity<Invoice> getInvoiceById(@PathVariable int id) {
		Invoice invoice = invoiceService.getInvoiceById(id);
		if (invoice != null) {
			return ResponseEntity.ok(invoice);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/invoices")
	public ResponseEntity<List<Invoice>> getAllInvoices() {
		List<Invoice> invoices = invoiceService.getAllInvoices();
		return ResponseEntity.ok(invoices);
	}

	@PostMapping("/invoices")
	public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice) {
		Invoice savedInvoice = invoiceService.saveInvoice(invoice);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedInvoice);
	}

	@PutMapping("/invoices/{id}")
	public ResponseEntity<Invoice> updateInvoice(@PathVariable int id, @RequestBody Invoice invoice) {
		Invoice existingInvoice = invoiceService.getInvoiceById(id);
		if (existingInvoice != null) {
			invoice.setInvoice_id(id);
			Invoice updatedInvoice = invoiceService.saveInvoice(invoice);
			return ResponseEntity.ok(updatedInvoice);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@DeleteMapping("/invoices/{id}")
	public ResponseEntity<Void> deleteInvoice(@PathVariable int id) {
		invoiceService.deleteInvoice(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/getInvoicesByAdmin/{id}")
	public ResponseEntity<?> getInvoicesByAdminID(@PathVariable int id) {
		try {
			return new ResponseEntity<>(invoiceService.getInvoicesByAdminId(id), HttpStatus.OK);

		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("somethign wrong with getInvoiceByAdmin api", HttpStatus.BAD_REQUEST);
		}

	}
	
	@GetMapping("/getInvoiceStatByAdminId/{id}")
	public ResponseEntity<?> getInvoiceStatByAdminId(@PathVariable int id){
		try {
			return new ResponseEntity<>(invoiceService.getInvoiceStatByAdminId(id),HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("somethign wrong with getInvoiceStatByAdmin api", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@GetMapping("/getAmountStatsInInvoices/{id}")
	public ResponseEntity<?> getInvoiceAmountStatByAdminId(@PathVariable int id){
		try {
			return new ResponseEntity<>(invoiceService.getAmountInInvoices(id),HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("somethign wrong with getInvoiceStatByAdmin api", HttpStatus.BAD_REQUEST);
		}
		
	}

	
}
