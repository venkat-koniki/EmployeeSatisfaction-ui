import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsSalesSummaryComponent } from './analytics-sales-summary.component';

describe('AnalyticsSalesSummaryComponent', () => {
  let component: AnalyticsSalesSummaryComponent;
  let fixture: ComponentFixture<AnalyticsSalesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsSalesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsSalesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
