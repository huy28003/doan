import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../core/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  employee = {
    name: '',
    email: '',
    phone: '',
    position: '',
    address: '',
    status: 'active',
  };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        this.successMessage = 'Nhân viên đã được thêm thành công!';
        this.errorMessage = null;
        this.router.navigate(['/employee']);
        // Reset form after submission
        this.employee = {
          name: '',
          email: '',
          phone: '',
          position: '',
          address: '',
          status: 'active',
        };
      },
      (error) => {
        this.errorMessage = 'Có lỗi xảy ra khi thêm nhân viên!';
        this.successMessage = null;
      }
    );
  }
  cancel() {
    this.router.navigate(['/employee']);
  }
}
