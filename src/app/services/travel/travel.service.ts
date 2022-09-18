import { Injectable } from '@angular/core';
import { travel } from 'src/app/shared/model/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getalltravelById(id:number):travel{
    return this.getAll().find(travel => travel.id == id)!;
  }

  gettravelById(id:number):travel{
    return this.getAll().find(travel => travel.id == id)!;
  }
  getAll():travel[]{
    return[
      {
        id:1,
        name:'Taj Hotel',
        favorite:false, 
        price:1300,
        city:['Location:pune'],
        imageUrl:'/assets/images/Hotel1.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:2,
        name:'Fountain Fun.',
        favorite:false,
        price:1500,
        city:['Location:Mumbai'],
        imageUrl:'/assets/images/Hotel2.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:3,
        name:'Olympus Hotel.',
        favorite:false,
        price:1500,
       
        city:['Location:pune'],
       
        imageUrl:'/assets/images/Hotel3.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:4,
        name:'Master Hotel',
        favorite:false,
        price:800,
        
        city:['Location:	Hyderabad',],
       
        imageUrl:'/assets/images/Hotel4.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:5,
        name:'Four Seasons Resort.',
        favorite:false,
        price:1000,
       
        city:['Location:Mumbai'],
      
        imageUrl:'/assets/images/Hotel5.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:6,
        name:'Happy Stay.',
        favorite:false,
        price:1350,
        
        city:['Location:Hyderabad'],
        
        imageUrl:'/assets/images/Hotel6.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:7,
        name:'Town and Country.',
        favorite:false,
        price:1500,
     
        city:['Location:pune'],
        
        imageUrl:'/assets/images/Hotel7.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:8,
        name:'Quick Stop.',
        favorite:false,
        price:1500,
       
        city:['Location:Hyderabad'],
    
        imageUrl:'/assets/images/Hotel8.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:9,
        name:'Inn Of Dreams.',
        favorite:false,
        price:1500,
        
        city:['Location:Mumbai'],
       
        imageUrl: '/assets/images/Hotel9.jpg',
        info:'Popular with Guests:- 1)Air Conditioning 2)Wi-Fi 3)Bathroom 4)Laundry Service Room Feature:-1)Charging Points 2)Hangers 3)Closet 4)Mirror 5)Chair',
      },
      {
        id:10,
        name:'AirLine ',
        favorite:false,
        price: 0,
        city:[' '],
        imageUrl:'/assets/images/airline.jpg ',
        info:'  ',
      },
      {
        id:11,
        name:'PASSPORT ',
        favorite:false,
        price: 0,
        city:['You Have Passsport Then Go For Flight '],
        imageUrl:'/assets/images/Passport.jpg ',
        info:'  ',
      },
      {
        id:12,
        name:'Trip Planning:- ',
        favorite:false,
        price: 0,
        city:[' Our 24/7 dedicated team provides fast & reliable ﬂight planning '],
        imageUrl:'/assets/images/flight planning.jpg ',
        info:'  ',
      },
      {
        id:13,
        name:'Pune To Mumbai',
        favorite:false,
        price:1000,
        city:['Location:Pune'],
        imageUrl:'/assets/images/Flight4.jpg',
        info:'Time 2h 15m ',
      },
      {
        id:14,
        name:'Pune To Hyderabad',
        favorite:false,
        price:800,
        city:['Location:Pune'],
        imageUrl:'/assets/images/Flight3.jpg',
        info:'Time 2h 15m ',
      },
      {
        id:15,
        name:'Hyderabad To Mumbai',
        favorite:false,
        price:1200,
        city:['Location:Hyderabad'],
        imageUrl:'/assets/images/Flight2.jpg',
        info:'Time 2h 15m  ',
      },
      {
        id:16,
        name:'Mumbai To Hyderabad',
        favorite:false,
        price:1300,
        city:['Location:Mumbai'],
        imageUrl:'/assets/images/Flight1.jpg',
        info:' Time 2h 15m ',
      },
      {
        id:17,
        name:'Mumbai To Pune',
        favorite:false,
        price:1000,
        city:['Location:Mumbai'],
        imageUrl:'/assets/images/Flight5.jpg',
        info:'Time 2h 15m ',
      },
      {
        id:18,
        name:' Hyderabad To Pune',
        favorite:false,
        price:1000,
        city:['Location:Hyderabad'],
        imageUrl:'/assets/images/Flight6.jpg',
        info:'Time 2h 15m ',
      },
      {
        id:19,
        name:' Hyderabad To Pune',
        favorite:false,
        price:100,
        city:['Location:Hyderabad'],
        imageUrl:'/assets/images/train1.jpg',
        info:'Time 4h 00m ',
      },
      {
      id:20,
      name:'Mumbai To Pune',
      favorite:false,
      price:200,
      city:['Location:Mumbai'],
      imageUrl:'/assets/images/train2.jpg',
      info:'Time 3h 15m ',
    },
    {
      id:21,
      name:'Mumbai To Hyderabad',
      favorite:false,
      price:300,
      city:['Location:Mumbai'],
      imageUrl:'/assets/images/train3.jpg',
      info:' Time 6h 00m ',
    },

      
      
      
      
    ];
  }
}
