import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  // Các nhóm hàng
  categories = [
    'Tất cả',
    'Thuốc lá',
    'Sữa',
    'Nước ngọt',
    'Mỹ phẩm',
    'Kẹo bánh',
    'Đồ uống có cồn',
    'Thực phẩm ăn liền',
  ];

  // Các trạng thái tồn kho
  stockStatus = [
    { label: 'Tất cả', value: 'all', selected: true },
    { label: 'Dưới định mức tồn', value: 'under', selected: false },
    { label: 'Vượt định mức tồn', value: 'over', selected: false },
    { label: 'Còn hàng trong kho', value: 'inStock', selected: false },
    { label: 'Hết hàng trong kho', value: 'outOfStock', selected: false },
  ];

  // Tìm kiếm nhóm hàng
  searchCategory = '';

  // Các biến điều khiển thu hẹp/mở rộng
  isProductTypeOpen = true;
  isCategoryOpen = true;
  isStockStatusOpen = true;

  // Toggle trạng thái mở rộng
  toggleProductType() {
    this.isProductTypeOpen = !this.isProductTypeOpen;
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }

  toggleStockStatus() {
    this.isStockStatusOpen = !this.isStockStatusOpen;
  }

}
