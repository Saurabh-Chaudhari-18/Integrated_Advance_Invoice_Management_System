package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entity.Client;
import com.app.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	 @Query(nativeQuery = true,value ="select * from product where product_name LIKE %:searchStr%")
		List <Product> searchProductByName( @Param("searchStr") String str);
    
}
