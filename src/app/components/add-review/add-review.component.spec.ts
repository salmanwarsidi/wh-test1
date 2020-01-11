import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewComponent } from './add-review.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';

describe('AddReviewComponent', () => {
  let component: AddReviewComponent;
  let fixture: ComponentFixture<AddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [
        RouterModule.forRoot([]),
        ReactiveFormsModule],
      declarations: [ AddReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewComponent);
    component = fixture.componentInstance;
    component.cardId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
