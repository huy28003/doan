import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination'; // Import module phân trang
import { ProductService } from '../../../core/service/product.service';
import { Product } from '../../../core/interface/product.interface';
import { AddProductComponent } from "../../../shared/_component/add-product/add-product.component";
import { Router } from '@angular/router';
import { log } from 'ng-zorro-antd/core/logger';




@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NzTableModule, NzCheckboxModule, NzInputModule, FormsModule, CommonModule, NzPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  pagedData: (Product & { checked: boolean })[] = [];
  isChecked = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      // Thêm thuộc tính checked vào từng item
      this.pagedData = data.map(item => ({
        ...item,
        checked: false // Gán mặc định là false
      }));
    });
  }

  toggleCheckAll(): void {
    this.pagedData.forEach(item => item.checked = this.isChecked);
  }
  toAddProduct(): void {
    this.router.navigate(['/add-product']);
    log('Navigating to add product page');
  }
}
