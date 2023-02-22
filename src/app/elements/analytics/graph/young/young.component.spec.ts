import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungComponent } from './young.component';

describe('YoungComponent', () => {
  let component: YoungComponent;
  let fixture: ComponentFixture<YoungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
