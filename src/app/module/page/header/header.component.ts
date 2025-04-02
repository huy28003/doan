import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs'; // Đảm bảo import NzTabsModule
import { NzButtonModule } from 'ng-zorro-antd/button'; // Nếu dùng button của NG-ZORRO
import { CommonModule } from '@angular/common';
import { NAVBAR_ITEMS, NavItem } from './navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NzButtonModule, NzTabsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: NavItem[] = NAVBAR_ITEMS;
}
