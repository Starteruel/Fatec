import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{

   formGroupProduct: FormGroup;

  constructor(private router: Router,
       private activeRoute: ActivatedRoute,
       private service: ProductService,
       private formBuilder: FormBuilder
   ){

    this.formGroupProduct = formBuilder.group({
       id: [''],
       name: [''],
       price: [''],
       category: ['']
    });

  }
  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    this.loadProduct(id);
  }
  loadProduct(id: number) {
    this.service.getProductsById(id).subscribe({
     next: data => this.formGroupProduct.setValue(data)
    });
  }

  update(){
    this.service.update(this.formGroupProduct.value).subscribe({
      next: () => this.router.navigate(['products'])
    });
  }

}
