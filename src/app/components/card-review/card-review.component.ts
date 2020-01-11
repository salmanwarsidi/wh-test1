import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/models/review';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent implements OnInit {

  @Input() review: IReview;

  constructor() { }

  ngOnInit() {
  }

}
