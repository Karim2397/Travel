import { Component, OnInit } from '@angular/core';
import { travel } from '../shared/model/travel';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { TravelService } from '../services/travel/travel.service';

@Component({
  selector: 'app-travelpage',
  templateUrl: './travelpage.component.html',
  styleUrls: ['./travelpage.component.css']
})
export class TravelpageComponent implements OnInit {
travel!:travel
  constructor(private activatedRoute:ActivatedRoute,private travelService:TravelService,
    private cartService:CartService,private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.travel = travelService.getalltravelById(params['id'])!;
      })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.travel);
    this.router.navigateByUrl('/cartpage')
  }

}