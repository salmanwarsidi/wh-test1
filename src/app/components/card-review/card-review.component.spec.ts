import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReviewComponent } from './card-review.component';
import { IReview } from '../../models/review';

describe('CardReviewComponent', () => {
  let component: CardReviewComponent;
  const review: IReview = { cardId: 1};
  let fixture: ComponentFixture<CardReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReviewComponent);
    component = fixture.componentInstance;
    component.review = review;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
