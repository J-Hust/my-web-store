package com.justin.webstore;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    private String name;

    public Product() {
    }

    public Product(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
