package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entity.Admin;
import com.app.entity.Client;
@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    List<Client> findByAdmin(Admin admin);
    
    @Query(nativeQuery = true,value ="select * from client where admin_id = :id")
	List <Client> getClientByAdminId(@Param("id") int id);
    
    @Query(nativeQuery = true,value ="select * from client where admin_id = :id and client_name LIKE %:searchStr%")
	List <Client> searchClientByName(@Param("id") int id , @Param("searchStr") String str);
   
    @Query(nativeQuery=true,value="select * from client where client_email=:id and password=:pass")
    Client authenticateClient(@Param("id") String username,@Param("pass") String pass);
    
}
