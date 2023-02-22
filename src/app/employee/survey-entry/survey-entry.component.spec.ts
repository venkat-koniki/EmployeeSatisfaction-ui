import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEntryComponent } from './survey-entry.component';

describe('SurveyEntryComponent', () => {
  let component: SurveyEntryComponent;
  let fixture: ComponentFixture<SurveyEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
