package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.InvoiceRepository;
import com.app.entity.Invoice;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    public Invoice getInvoiceById(int id) {
        return invoiceRepository.findById(id).orElse(null);
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Invoice saveInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }

    public void deleteInvoice(int id) {
        invoiceRepository.deleteById(id);
    }
    public List<Invoice> getInvoicesByAdminId(int id) {
        
    	
    	return invoiceRepository.getInvoicesByAdminId(id);
    }
    public List<?> getInvoiceStatByAdminId(int id){
    	return invoiceRepository.getInvoiceStatByAdminId(id);
    }
    public List<?> getAmountInInvoices(int id){
    	return invoiceRepository.getInvoiceAmountStatByAdminId(id);
    }
}

