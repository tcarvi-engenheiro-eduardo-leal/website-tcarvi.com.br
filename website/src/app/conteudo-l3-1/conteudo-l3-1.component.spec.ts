import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL31Component } from './conteudo-l3-1.component';

describe('ConteudoL31Component', () => {
  let component: ConteudoL31Component;
  let fixture: ComponentFixture<ConteudoL31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
