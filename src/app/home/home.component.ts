import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel/travel.service';
import { travel } from '../shared/model/travel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  travel:travel []=[];
  constructor(private hs:TravelService) { }

  ngOnInit(): void {
    this.travel=this.hs.getAll();
  }

}
