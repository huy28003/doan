import { Component } from '@angular/core';
import { FilterComponent } from "../../../shared/_component/filter/filter.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-test1',
  imports: [FilterComponent, ProductsComponent],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {

}
