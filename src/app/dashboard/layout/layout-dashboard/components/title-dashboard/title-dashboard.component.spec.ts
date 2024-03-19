import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDashboardComponent } from './title-dashboard.component';

describe('TitleDashboardComponent', () => {
  let component: TitleDashboardComponent;
  let fixture: ComponentFixture<TitleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
