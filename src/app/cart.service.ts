import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class CartService {
  items = [];
  total = 0;

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
    this.total += product.price;
  }

  removeFromCart(product)
  {
    let index = this.items.indexOf(product);
    
    console.log("remove index", index);

    if(index > -1)
    {
      this.items.splice(index, 1);
      this.total -= product.price;
      return this.items;
    }
    else {
      window.alert("Selected product already removing from cart");
    }
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.total;
  }

  clearCart() {
    this.items = [];
    this.total = 0;
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}