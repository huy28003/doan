export interface Category {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Product {
  _id: string;
  name: string;
  price: number;
  cost: number;
  category: Category;
  description?: string;
  quantity?: number;
  weight?: number;
  unitType: 'weight' | 'quantity';
  createdAt: string;
  updatedAt: string;
  __v: number;
}


