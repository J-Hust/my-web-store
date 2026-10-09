package com.justin.webstore.repository;

import com.justin.webstore.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Product, Integer> {
}