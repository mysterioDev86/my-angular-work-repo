import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveLearningComponent } from './directive-learning.component';

describe('DirectiveLearningComponent', () => {
  let component: DirectiveLearningComponent;
  let fixture: ComponentFixture<DirectiveLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
