import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuspectComponent } from './form-suspect.component';

describe('FormSuspectComponent', () => {
  let component: FormSuspectComponent;
  let fixture: ComponentFixture<FormSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
