import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { cartitem } from '../shared/model/cartitem';
import { travel } from '../shared/model/travel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(travel: travel): void {
    let cartitem1 = this.cart.items.find(item => item.travel.id === travel.id);
    if (cartitem1) {
      this.changeQuantity(travel.id, cartitem1.quantity + 1);
      return;
    }
    this.cart.items.push(new cartitem(travel));
  }


  removeFromCart(travelid: number): void {
    this.cart.items = this.cart.items.filter(item => item.travel.id != travelid);
  }

  changeQuantity( travelid: number,quantity: number) {
    let cartitem = this.cart.items.find(item => item.travel.id === travelid);
    if (!cartitem) return;
    cartitem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }

  constructor() { }
}
