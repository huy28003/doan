import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../core/interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/service/product.service';
import { CategoryService } from '../../../core/service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    cost: 0,
    category: '',
    description: '',
    quantity: 0
  };

  filteredCategories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {

    this.categoryService.getCategories().subscribe((categories: Category[]) => {

      this.filteredCategories = categories;
    });
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        window.alert('Product added successfully');
        this.router.navigate(['/product']);
      },
      error: (error) => {
        console.error('There was an error!', error);

        window.alert('There was an error while adding the product');
      }
    });
  }
  cancel() {
    this.router.navigate(['/product']);
  }

}
