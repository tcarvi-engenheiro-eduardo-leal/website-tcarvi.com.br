import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3L1Component } from './c3-l1.component';

describe('C3L1Component', () => {
  let component: C3L1Component;
  let fixture: ComponentFixture<C3L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3L1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
