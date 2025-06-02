import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private initialProducts: Product[] = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, status: true },
    { id: 2, name: 'MacBook Air M2', price: 1299, status: true },
    { id: 3, name: 'AirPods Pro', price: 249, status: true },
    { id: 4, name: 'iPad Air', price: 599, status: false },
    { id: 5, name: 'Apple Watch Series 9', price: 399, status: true },
    { id: 6, name: 'Samsung Galaxy S24', price: 899, status: true },
    { id: 7, name: 'Dell XPS 13', price: 1199, status: true },
    { id: 8, name: 'Sony WH-1000XM5', price: 349, status: false },
    { id: 9, name: 'Nintendo Switch OLED', price: 349, status: true },
    { id: 10, name: 'PS5 Digital Edition', price: 399, status: false },
    { id: 11, name: 'Xbox Series X', price: 499, status: true },
    { id: 12, name: 'Google Pixel 8', price: 699, status: true },
    { id: 13, name: 'Meta Quest 3', price: 499, status: true },
    { id: 14, name: 'LG C3 OLED 65"', price: 1799, status: true },
    { id: 15, name: 'Canon EOS R6', price: 2499, status: false },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(
    this.initialProducts
  );
  private nextId = 16;

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Omit<Product, 'id'>): Product {
    const newProduct = {
      ...product,
      id: this.nextId++,
    };
    const currentProducts = this.productsSubject.getValue();
    this.productsSubject.next([...currentProducts, newProduct]);
    return newProduct;
  }

  deleteProduct(id: number): boolean {
    const currentProducts = this.productsSubject.getValue();
    const filteredProducts = currentProducts.filter(
      (product) => product.id !== id
    );

    if (currentProducts.length !== filteredProducts.length) {
      this.productsSubject.next(filteredProducts);
      return true;
    }
    return false;
  }

  getProductById(id: number): Product | undefined {
    const currentProducts = this.productsSubject.getValue();
    return currentProducts.find((product) => product.id === id);
  }

  updateProduct(product: Product): boolean {
    const currentProducts = this.productsSubject.getValue();
    const index = currentProducts.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      const updatedProducts = [...currentProducts];
      updatedProducts[index] = product;
      this.productsSubject.next(updatedProducts);
      return true;
    }
    return false;
  }
}
