import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  productId?: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();

    // Check if we're in edit mode
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id; // Convert string to number
      this.loadProduct(this.productId);
    }
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0.01)]],
      status: [true],
    });
  }

  private loadProduct(id: number): void {
    const product = this.productService.getProductById(id);
    if (product) {
      this.productForm.patchValue({
        name: product.name,
        price: product.price,
        status: product.status,
      });
    } else {
      // Product not found, redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValues = this.productForm.value;

      if (this.isEditMode && this.productId) {
        // Update existing product
        const updatedProduct = {
          id: this.productId,
          name: formValues.name,
          price: parseFloat(formValues.price),
          status: formValues.status,
        };

        if (this.productService.updateProduct(updatedProduct)) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        // Add new product
        const newProduct = {
          name: formValues.name,
          price: parseFloat(formValues.price),
          status: formValues.status,
        };

        this.productService.addProduct(newProduct);
        this.router.navigate(['/dashboard']);
      }
    }
  }

  // Helper methods for template
  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }
}
