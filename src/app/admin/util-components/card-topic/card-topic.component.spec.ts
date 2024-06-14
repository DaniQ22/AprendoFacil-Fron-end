import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopicComponent } from './card-topic.component';

describe('CardTopicComponent', () => {
  let component: CardTopicComponent;
  let fixture: ComponentFixture<CardTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTopicComponent]
    });
    fixture = TestBed.createComponent(CardTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
