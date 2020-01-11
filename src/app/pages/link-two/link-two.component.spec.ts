import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTwoComponent } from './link-two.component';

describe('LinkTwoComponent', () => {
  let component: LinkTwoComponent;
  let fixture: ComponentFixture<LinkTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
