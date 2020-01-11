import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IReview } from 'src/app/models/review';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  @Input() cardId: number;
  @Output() addReview = new EventEmitter();

  reviewForm: FormGroup;
  review: IReview = {
    cardId: this.cardId,
    avatar: 'avatar-new.png'
  };

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      // this.cardId = param.id;
    });

    this.reviewForm = this.fb.group({
      email: new FormControl(this.review.email, [
        Validators.required,
        Validators.email
      ]),
      description: new FormControl(this.review.description, [
        Validators.required,
        Validators.minLength(5)
      ]),
      rate: new FormControl(this.review.rate)
    });
  }

  submitReview() {
    this.review = {
      email: this.reviewForm.value.email,
      rate: 3,
      user: 'guest',
      description: this.reviewForm.value.description,
      cardId: this.cardId,
      avatar: 'avatar-new.png'
    };
    this.reviewService.addReview(this.review);
    this.addReview.emit(this.cardId);
    this.resetFormValue();
  }

  resetFormValue() {
    this.reviewForm.markAsPristine();
    this.reviewForm.markAsUntouched();
    this.email.setValue('');
    this.description.setValue('');
  }

  get email() {
    return this.reviewForm.get('email');
  }

  get description() {
    return this.reviewForm.get('description');
  }
}
