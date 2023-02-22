import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphComparissonComponent } from './graph-comparisson.component';

describe('GraphComparissonComponent', () => {
  let component: GraphComparissonComponent;
  let fixture: ComponentFixture<GraphComparissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphComparissonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphComparissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
