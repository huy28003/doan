import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../core/service/employee.service';
import { Employee } from '../../../core/interface/employee.inteface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [NzPaginationModule, NzTableModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  listOfData: Employee[] = [];  // Biến lưu trữ danh sách nhân viên
  pageSize = 5;  // Số lượng bản ghi mỗi trang
  currentPage = 1;  // Trang hiện tại

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();  // Lấy dữ liệu khi component được khởi tạo
  }

  // Gọi API để lấy danh sách nhân viên
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.listOfData = data;
    });
  }

  // Phân trang dữ liệu
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = this.currentPage * this.pageSize;
    return this.listOfData.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
  toAddEmployyee(): void {

    this.router.navigate(['/add-employee']);
  }
}
