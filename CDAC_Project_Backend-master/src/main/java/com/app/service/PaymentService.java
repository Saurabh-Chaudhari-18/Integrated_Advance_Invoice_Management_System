package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PaymentRepository;
import com.app.entity.Payment;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment getPaymentById(int id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public void deletePayment(int id) {
        paymentRepository.deleteById(id);
    }
    public List<Payment> getPaymentsByAdminId(int id) {
    	return paymentRepository.getPaymentsByAdminId(id);
    }
    
    public List <?> getTotalAmount(int id){
    	return paymentRepository.getTotalPaymentsAmountByAdminId(id);
    }
}

