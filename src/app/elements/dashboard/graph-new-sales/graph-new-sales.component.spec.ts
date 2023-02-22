import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNewSalesComponent } from './graph-new-sales.component';

describe('GraphNewSalesComponent', () => {
  let component: GraphNewSalesComponent;
  let fixture: ComponentFixture<GraphNewSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphNewSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNewSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
