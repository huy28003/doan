import { Route } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout.component";
import { Test1Component } from "../../page/test1/test1.component";
import { ProductsComponent } from "../../page/products/products.component";
import { AddProductComponent } from "../../../shared/_component/add-product/add-product.component";
import { EmployeeComponent } from "../../page/employee/employee.component";
import { AddEmployeeComponent } from "../../../shared/_component/add-employee/add-employee.component";



export const layoutAdminRoutes: Route[] = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'product', component: Test1Component },
      { path: 'add-product', component: AddProductComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
    ],
  },
];
