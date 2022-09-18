import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { CartService } from './services/cart.service';
import { TravelpageComponent } from './travelpage/travelpage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'travel/:id',component:TravelpageComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'CartService', component:CartService},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'feedback',component:FeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
