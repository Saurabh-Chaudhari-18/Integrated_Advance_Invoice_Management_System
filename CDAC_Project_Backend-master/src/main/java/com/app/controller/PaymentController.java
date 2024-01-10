package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entity.Invoice;
import com.app.entity.Payment;
import com.app.service.InvoiceService;
import com.app.service.PaymentService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	@Autowired
	private InvoiceService invoiceService;

	@GetMapping("/payments/{id}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable int id) {
		Payment payment = paymentService.getPaymentById(id);
		if (payment != null) {
			return ResponseEntity.ok(payment);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/payments")
	public ResponseEntity<List<Payment>> getAllPayments() {
		List<Payment> payments = paymentService.getAllPayments();
		return ResponseEntity.ok(payments);
	}

	@PostMapping("/payments")
	public ResponseEntity<?> createPayment(@RequestBody Payment payment) {
		try {
//    		
			Invoice existingInvoice = invoiceService.getInvoiceById(payment.getInvoice_id().getInvoice_id());
			if (existingInvoice.getAmount_due() > 0) {
				existingInvoice.setAmount_paid(existingInvoice.getAmount_paid() + payment.getPayment_amount());
				existingInvoice.setAmount_due(existingInvoice.getAmount_due() - payment.getPayment_amount());
				if(existingInvoice.getAmount_due()==0) {
					existingInvoice.setStatus("paid");
				}
				else {
					existingInvoice.setStatus("partially paid");
				}
				invoiceService.saveInvoice(existingInvoice);

				Payment savedPayment = paymentService.savePayment(payment);
				return ResponseEntity.status(HttpStatus.CREATED).body(savedPayment);
			}
			
			else {
				return new ResponseEntity<>("payment failed because no due left", HttpStatus.NOT_MODIFIED);
			}

		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("req failed to crete the payment", HttpStatus.BAD_REQUEST);
		}

	}

	@PutMapping("/payments/{id}")
	public ResponseEntity<Payment> updatePayment(@PathVariable int id, @RequestBody Payment payment) {
		Payment existingPayment = paymentService.getPaymentById(id);
		if (existingPayment != null) {
			payment.setPayment_id(id);
			Payment updatedPayment = paymentService.savePayment(payment);
			return ResponseEntity.ok(updatedPayment);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/payments/{id}")
	public ResponseEntity<Void> deletePayment(@PathVariable int id) {
		paymentService.deletePayment(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/getPaymentsByAdminId/{id}")
	public ResponseEntity<?> getPaymentsByAdminId(@PathVariable int id) {
		try {
			return new ResponseEntity<List<Payment>>(paymentService.getPaymentsByAdminId(id), HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}

	@GetMapping("/getTotalPaymentAmount/{id}")
	public ResponseEntity<?> getToatalPayment(@PathVariable int id) {
		try {
			return new ResponseEntity<List<?>>(paymentService.getTotalAmount(id), HttpStatus.OK);

		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
