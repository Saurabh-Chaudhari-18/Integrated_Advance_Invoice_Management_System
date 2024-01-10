package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entity.Client;
import com.app.entity.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {
    List<Invoice> findByClient(Client client);
    
    @Query(nativeQuery = true, value="select * from invoice where client_id in (select client_id from client where admin_id= :id)" )
    List<Invoice> getInvoicesByAdminId(@Param("id") int id);
    
    @Query(nativeQuery = true, value="SELECT COUNT(status), status FROM invoice GROUP BY status" )
    List<?> getInvoiceStatByAdminId(@Param("id") int id);
    
    
    @Query(nativeQuery = true,value="select sum(amount_due) as due,sum(amount_paid) as paid,sum(amount_total) as total from invoice where client_id in (select client_id from client where admin_id=:id)")
    List<?> getInvoiceAmountStatByAdminId(@Param("id") int id);
}
