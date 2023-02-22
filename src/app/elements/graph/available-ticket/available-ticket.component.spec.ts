import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTicketComponent } from './available-ticket.component';

describe('AvailableTicketComponent', () => {
  let component: AvailableTicketComponent;
  let fixture: ComponentFixture<AvailableTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
