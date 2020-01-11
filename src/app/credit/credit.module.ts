import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyCreditComponent } from '../components/apply-credit/apply-credit.component';
import { PostRoutingModule } from './creadit-routing.module';



@NgModule({
  declarations: [ApplyCreditComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreditModule { }
