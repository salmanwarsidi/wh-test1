import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { CardInfoComponent } from 'src/app/components/card-info/card-info.component';
import { AddReviewComponent } from 'src/app/components/add-review/add-review.component';
import { CardReviewComponent } from 'src/app/components/card-review/card-review.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule],
      declarations: [
        HomeComponent,
        CardListComponent,
        CardInfoComponent,
        AddReviewComponent,
      CardReviewComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
