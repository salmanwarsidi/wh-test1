import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInfoComponent implements OnInit {

  @Input() card: ICard = {};
  @Input() lastItem = false;
  @Output() apply = new EventEmitter();
  @Output() showReview = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onApply() {
    this.apply.emit(this.card.id);
  }

  onShowReview() {
    this.showReview.emit(this.card);
  }

}
