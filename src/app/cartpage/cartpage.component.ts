import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/model/cart';
import { cartitem } from '../shared/model/cartitem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  Cart!:Cart;
  constructor(private cartService: CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart(){
    this.Cart=this.cartService.getCart();
  }
  removeFromCart(cartitem:cartitem){
    this.cartService.removeFromCart(cartitem.travel.id);
    this.setCart();
  }
  changeQuantity(cartitem:cartitem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartitem.travel.id,quantity);
    
    this.setCart();
  }

}
