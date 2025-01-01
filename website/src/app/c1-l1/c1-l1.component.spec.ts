import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1L1Component } from './c1-l1.component';

describe('C1L1Component', () => {
  let component: C1L1Component;
  let fixture: ComponentFixture<C1L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C1L1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
