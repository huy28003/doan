export interface NavItem {
  label: string;
  route: string;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export const NAVBAR_ITEMS: NavItem[] = [
  { label: 'Tổng quan', route: 'test', hasDropdown: false },
  {
    label: 'Hàng hóa',
    route: '#',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Danh sách hàng hóa', route: '#' },
      { label: 'Thiết lập giá', route: '#' },
      { label: 'Kiểm kho', route: '#' },
      { label: 'Xuất Hủy', route: '#' },
      { label: 'Nhà cung cấp', route: '#' },
      { label: 'Nhập hàng', route: '#' },
      { label: 'Trả hàng nhập', route: '#' },
    ],
  },
  {
    label: 'Đơn hàng',
    route: '#',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Đặt hàng', route: '#' },
      { label: 'Hóa đơn', route: '#' },
      { label: 'Trả hànghàng', route: '#' },
      { label: 'Đối tác giao hànghàng', route: '#' },
      { label: 'Vận đơn', route: '#' },
    ],
  },
  { label: 'Khách hàng', route: 'test', hasDropdown: false },
  { label: 'Nhân viên', route: '#', hasDropdown: false },
  { label: 'Sổ quỹ', route: '#', hasDropdown: false },
  { label: 'Phân tích', route: '#', hasDropdown: false },
  { label: 'Bán online', route: '#', hasDropdown: false },
];
