import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBestSellingComponent } from './graph-best-selling.component';

describe('GraphBestSellingComponent', () => {
  let component: GraphBestSellingComponent;
  let fixture: ComponentFixture<GraphBestSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphBestSellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBestSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
