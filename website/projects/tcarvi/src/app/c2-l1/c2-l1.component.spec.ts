import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2L1Component } from './c2-l1.component';

describe('C2L1Component', () => {
  let component: C2L1Component;
  let fixture: ComponentFixture<C2L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C2L1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
