import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(product)
  {
    let index = this.items.indexOf(product);
    
    console.log("remove index", index);

    if(index > -1)
    {
      this.items.splice(index, 1);
      return this.items;
    }
    else {
      window.alert("Selected product already removing from cart");
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}