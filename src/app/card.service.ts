import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: ICard[] = [
    {
      id: 1,
      title: 'Barclaycard CashForward&trade; Word MasterCard&trade;',
      type: 'Approval Odds',
      credit: 750,
      rate: 4,
      reviewCount: 3252,
      attributes: [
        'Get a $100 cash reward bonus after you spend $500 in purchases in the first 90 days after account oppening.',
        'Earn unlimited 15% cash rewards on every purcashes.',
        'Earn unlimited 15% cash rewards on every purcashes.',
      ],
      description: '',
      image: 'visa-card.png'
    }
  ];
  cards$ = new BehaviorSubject<ICard[]>(this.cards);

  constructor() { }

  getCard(id: number) {
    const index = this.cards.findIndex(i => i.id === id);
    return this.cards[index];
  }
}
