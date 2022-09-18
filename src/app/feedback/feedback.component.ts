import { Component, OnInit,HostListener,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,NgForm,Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FeedbackService } from '../services/feedback.service';
import { IFeedback } from '../services/ifeedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  name:FormControl = new FormControl('');
  email:FormControl = new FormControl('');
  mobile:FormControl = new FormControl('');
  summary:FormControl = new FormControl('');
  

  
  customerForm = new FormGroup({

  name : new FormControl(''),
  email : new FormControl(''),
   mobile : new FormControl(''),
   summary: new FormControl(''),
  
 })


 ifeedback!:IFeedback[];
 
 
 submitted = false;
 checkoutInfoService: any;
 FeedbackService: any;
  constructor(private feedbackservice:FeedbackService,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.feedbackservice.getAllCustomers().subscribe(data=> this.ifeedback = data);
  }
  saveData(){
    let customer:IFeedback = {
      name: this.name.value,
      email: this.email.value,
      mobile: this.mobile.value,
      summary: this.summary.value,
     
     
      
    };
    console.log(customer);
    this.feedbackservice.addCustomer(customer);
    alert("Customer added succesfully");
    //this.checkoutInfoService.getData();
  
  
  
    
  }

}




