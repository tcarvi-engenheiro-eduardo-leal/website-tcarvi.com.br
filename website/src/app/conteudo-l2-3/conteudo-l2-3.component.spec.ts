import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL23Component } from './conteudo-l2-3.component';

describe('ConteudoL23Component', () => {
  let component: ConteudoL23Component;
  let fixture: ComponentFixture<ConteudoL23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
