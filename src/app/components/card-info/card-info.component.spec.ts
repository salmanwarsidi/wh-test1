import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoComponent } from './card-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ICard } from 'src/app/models/card';

describe('CardInfoComponent', () => {
  let component: CardInfoComponent;
  const card: ICard = { id: 1, title: 'Test', type: 'Approval', rate: 3};
  let fixture: ComponentFixture<CardInfoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
declarations: [ CardInfoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;
    component.card = card;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
