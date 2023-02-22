import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEventHeldComponent } from './graph-event-held.component';

describe('GraphEventHeldComponent', () => {
  let component: GraphEventHeldComponent;
  let fixture: ComponentFixture<GraphEventHeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphEventHeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEventHeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
