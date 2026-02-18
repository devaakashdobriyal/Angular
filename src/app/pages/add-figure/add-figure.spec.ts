import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFigure } from './add-figure';

describe('AddFigure', () => {
  let component: AddFigure;
  let fixture: ComponentFixture<AddFigure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFigure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFigure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
