import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IReview } from './models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews: IReview[] = [
    {
      id: 1,
      cardId: 1,
      user: 'Naser',
      email: '',
      date:  'Aug 26, 2019',
      rate: 4,
      upVote: 5,
      downVote: 1,
      description: 'I already for 20 yrs plus have been using this visa credit card',
      avatar: 'avatar1.jpg'
    },
    {
      id: 2,
      cardId: 1,
      user: 'Maryam',
      email: '',
      date:  'Dec 8, 2019',
      rate: 2,
      upVote: 1,
      downVote: 6,
      description: 'Dont\'t use this visa credit card',
      avatar: 'avatar2.png'
    },
    {
      id: 3,
      cardId: 1,
      user: 'Sahand',
      email: '',
      date:  'Dec 9, 2019',
      rate: 5,
      upVote: 10,
      downVote: 5,
      description: 'I already for 3 yrs plus have been using this visa credit card',
      avatar: 'avatar3.jpg'
    },
  ];

  constructor() { }

  getCardReviews(id: number): Observable<IReview[]> {
    return of(this.reviews.filter(c => c.cardId === id));
  }

  addReview(review: IReview) {
    this.reviews = [
      ...this.reviews, {
        ...review,
        id: this.reviews.length + 1
      }
    ];
  }

}
