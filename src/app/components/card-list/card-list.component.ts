import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { ICard } from 'src/app/models/card';
import { IReview } from 'src/app/models/review';
import { ReviewService } from 'src/app/review.service';

function doScrolling(elementY, duration) {
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy {
  cards: ICard[];
  reviews: IReview[];
  isShowReview = false;
  selectedCardTitle = '';
  selectedCardId: number;
  subscription = null;
  constructor(
    private cardService: CardService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.subscription = this.cardService.cards$.subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      // this.subscription.unsubscription();
    }
  }

  applyCreditCard(id: number) {
    console.log(id);
  }

  showReview(card: ICard) {
    this.isShowReview = !this.isShowReview;
    this.selectedCardId = card.id;
    this.selectedCardTitle = card.title + '\'s Reviews';
    if (this.isShowReview) {
      this.reviewService.getCardReviews(card.id).subscribe(revs => {
        this.reviews = revs;
        document.getElementById('reviewContainer').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
      });
    } else {
      this.reviews = [];
    }
  }

  onAddReview(id: number) {
    this.reviewService.getCardReviews(id).subscribe(revs => {
      this.reviews = revs;
    });
  }
}
