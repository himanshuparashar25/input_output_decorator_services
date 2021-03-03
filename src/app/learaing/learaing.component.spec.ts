import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearaingComponent } from './learaing.component';

describe('LearaingComponent', () => {
  let component: LearaingComponent;
  let fixture: ComponentFixture<LearaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearaingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
