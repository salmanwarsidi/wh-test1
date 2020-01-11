import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { ICard } from '../../models/card';
import { IReview } from 'src/app/models/review';
import { CardInfoComponent } from '../card-info/card-info.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import { CardReviewComponent } from '../card-review/card-review.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  const cards: ICard[] = [{
    id: 1,
    title: 'Test Card',
    type: 'Approcal',
    rate: 4,
    reviewCount: 400,
    credit: 550,
    attributes: [],
    description: ''
  }];

  const review: IReview[] = [{
    id: 1,
    cardId: 1,
    date: 'Aug 22 2019',
    description: 'It\'s good credit',
    rate: 3,
    user: 'Naser'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), ReactiveFormsModule],
      declarations: [
              CardListComponent,
              CardInfoComponent,
              AddReviewComponent,
              CardReviewComponent ]
          })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be load card list', () => {
    component.cards = cards;
    fixture.detectChanges();
  });

  it('should be load card reviews', () => {
    component.reviews = review;
    fixture.detectChanges();
  });

});
