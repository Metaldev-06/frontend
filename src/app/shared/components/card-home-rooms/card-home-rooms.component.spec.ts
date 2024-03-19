import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomeRoomsComponent } from './card-home-rooms.component';

describe('CardHomeRoomsComponent', () => {
  let component: CardHomeRoomsComponent;
  let fixture: ComponentFixture<CardHomeRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHomeRoomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHomeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
