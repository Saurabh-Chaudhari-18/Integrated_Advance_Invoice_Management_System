package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import com.app.entity.Client;
import com.app.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    List<Payment> findByClient(Client client);
    
    @Query(nativeQuery = true, value ="select * from payment where client_id in (select client_id from client where admin_id=:id)")
    public List<Payment>getPaymentsByAdminId(@PathVariable("id") int id);

//    select sum(payment_amount) from payment where client_id in (select client_id from client where admin_id=1);
    
    @Query(nativeQuery = true, value ="select sum(payment_amount) from payment where client_id in (select client_id from client where admin_id=:id)")
    public List<?> getTotalPaymentsAmountByAdminId(@PathVariable("id") int id);

}

