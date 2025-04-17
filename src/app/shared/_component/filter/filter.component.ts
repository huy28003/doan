import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../core/service/category.service';
import { Category } from '../../../core/interface/product.interface';
@Component({
  selector: 'app-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  standalone: true,
})
export class FilterComponent {
  productTypes = [
    { label: 'Hàng hóa', value: 'hanghoa', selected: false },
    { label: 'Dịch vụ', value: 'dichvu', selected: false },
    { label: 'Combo - Đóng gói', value: 'combo', selected: false },
  ];

  categories: Category[] = [];  // Sử dụng interface Category
  filteredCategories: Category[] = [];  // Lọc danh mục
  searchCategory: string = '';  // Tìm kiếm nhóm hàng

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.filteredCategories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }



  stockStatus = [
    { label: ' Tất cả', value: 'conhang', selected: false },
    { label: 'Dưới định mức tồn', value: '1', selected: false },
    { label: 'Vượt định mức tồn', value: '2', selected: false },
    {
      label: 'Còn hàng trong kho',
      value: '3',
      selected: false,
    },
    { label: 'Hết hàng trong kho', value: '4', selected: false },
    {
      label: 'Lựa chọn khác',
      value: '5',
      selected: false,
    },
  ];
  sale = [
    { label: ' Tất cả', value: 'conhang', selected: false },
    { label: 'Được bán trực tiếp', value: '1', selected: false },
    {
      label: 'Không được bán trực tiếp',
      value: '2',
      selected: false,
    },

  ];
  selectedTime = '';
  selectedDate = '';

  selectedExpiry = '';
  expiryDate = '';
  supplier = '';
  location = '';
  linkChannel = 'all';  // Mặc định là "Tất cả"
  displayOption = 'all'; // Mặc định là "Tất cả"

  filterCategories() {
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.searchCategory.toLowerCase())
    );
  };
}
