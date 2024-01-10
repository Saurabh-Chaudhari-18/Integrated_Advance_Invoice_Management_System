package com.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Client;

@Repository

public interface ClientDao extends JpaRepository<Client, Integer> {
	
}
