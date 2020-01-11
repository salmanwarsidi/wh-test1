import { Component, OnInit } from '@angular/core';
import { Location, CurrencyPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IPersonalInfo } from 'src/app/models/personal-info';

@Component({
  selector: 'app-apply-credit',
  templateUrl: './apply-credit.component.html',
  styleUrls: ['./apply-credit.component.scss']
})
export class ApplyCreditComponent implements OnInit {
  cardId: number;
  personalInfo: IPersonalInfo = {};
  personalForm: FormGroup;
  constructor(private location: Location,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.cardId = param.id;
    });

    this.personalForm = this.fb.group({
      firstName: new FormControl(this.personalInfo.firstName, [
        Validators.required
      ]),
      lastName: new FormControl(this.personalInfo.lastName, [
        Validators.required,
      ]),
      cardName: new FormControl(this.personalInfo.cardName, [
        Validators.required,
      ]),
      email: new FormControl(this.personalInfo.email, [
        Validators.required,
        Validators.email
      ]),
      birthDate: new FormControl(this.personalInfo.birthDate, [
        Validators.required
      ]),
      phoneNumber: new FormControl(this.personalInfo.phoneNumber, [
        Validators.required
      ]),
      totalIncome: new FormControl(this.personalInfo.totalIncome, [
        Validators.required
      ])
    });
  }

  submit() {
   if (!this.personalForm.invalid) {
    alert('Successfully Applied');
    this.location.back();
   } else {
      this.firstName.markAsTouched();
      this.lastName.markAsTouched();
      this.cardName.markAsTouched();
      this.email.markAsTouched();
      this.birthDate.markAsTouched();
      this.phoneNumber.markAsTouched();
      this.totalIncome.markAsTouched();
    }
  }

  transformTotalIncome(element) {
    this.personalForm.value.totalIncome = this.currencyPipe.transform(this.personalForm.value.totalIncome, '$');
    console.log(this.personalForm.value.totalIncome);
    element.target.value = this.personalForm.value.totalIncome;
}

  back() {
    this.location.back();
  }

  get firstName() {
    return this.personalForm.get('firstName');
  }

  get lastName() {
    return this.personalForm.get('lastName');
  }

  get cardName() {
    return this.personalForm.get('cardName');
  }

  get email() {
    return this.personalForm.get('email');
  }

  get birthDate() {
    return this.personalForm.get('birthDate');
  }

  get phoneNumber() {
    return this.personalForm.get('phoneNumber');
  }

  get totalIncome() {
    return this.personalForm.get('totalIncome');
  }

  get incomeSource() {
    return this.personalForm.get('incomeSource');
  }
}
