import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCreditComponent } from './apply-credit.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

describe('ApplyCreditComponent', () => {
  let component: ApplyCreditComponent;
  let fixture: ComponentFixture<ApplyCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]),
      ReactiveFormsModule],
      declarations: [ ApplyCreditComponent ],
      providers: [CurrencyPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
