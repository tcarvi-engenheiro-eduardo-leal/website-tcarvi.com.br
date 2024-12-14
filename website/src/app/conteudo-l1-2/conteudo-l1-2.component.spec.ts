import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL12Component } from './conteudo-l1-2.component';

describe('ConteudoL12Component', () => {
  let component: ConteudoL12Component;
  let fixture: ComponentFixture<ConteudoL12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
