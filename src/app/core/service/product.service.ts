import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

interface addProduct {
  name: string;
  price: number;
  cost: number;
  category: string;
  description: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000/api/products';  // Địa chỉ API của bạn

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  addProduct(product: addProduct): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
}
