import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figures } from './figures';

describe('Figures', () => {
  let component: Figures;
  let fixture: ComponentFixture<Figures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Figures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Figures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
