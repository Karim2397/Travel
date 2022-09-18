import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeedback } from './ifeedback';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient) { }
    getAllCustomers(){

      return this.httpclient.get<IFeedback[]>("http://localhost:7156/api/Feedbacks",

      {

         headers : {"Access-Control-Allow-Origin":"*"}

      });
    }
   addCustomer(data : IFeedback)
    {

      this.httpclient.post<IFeedback>("http://localhost:7156/api/Feedbacks",data,{

        headers : {

          "Access-Control-Allow-Origin" : "*"

        }
      }).subscribe(data=>{console.log("Done")});
 }
   
   

 
}
