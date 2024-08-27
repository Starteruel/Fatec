import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 products: Product[] = [
  {"id": 1,
    "name": "Computador i7",
    "price": 1200.00,
    "category": "Eletrônicos"
  },
  {"id": 2,
    "name": "Computador i3",
    "price": 980.00,
    "category": "Eletrônicos"
  },
  {"id": 3,
    "name": "Computador i9",
    "price": 4300.00,
    "category": "Eletrônicos"
  }
 ];
}
