import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizeFirstLetterComponent } from './capitalize-first-letter.component';

describe('CapitalizeFirstLetterComponent', () => {
  let component: CapitalizeFirstLetterComponent;
  let fixture: ComponentFixture<CapitalizeFirstLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalizeFirstLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalizeFirstLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
