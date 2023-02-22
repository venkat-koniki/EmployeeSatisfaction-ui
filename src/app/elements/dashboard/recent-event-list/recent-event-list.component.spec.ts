import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEventListComponent } from './recent-event-list.component';

describe('RecentEventListComponent', () => {
  let component: RecentEventListComponent;
  let fixture: ComponentFixture<RecentEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
