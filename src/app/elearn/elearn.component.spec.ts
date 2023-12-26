import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElearnComponent } from './elearn.component';

describe('ElearnComponent', () => {
  let component: ElearnComponent;
  let fixture: ComponentFixture<ElearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
