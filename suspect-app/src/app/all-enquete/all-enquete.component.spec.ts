import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEnqueteComponent } from './all-enquete.component';

describe('AllEnqueteComponent', () => {
  let component: AllEnqueteComponent;
  let fixture: ComponentFixture<AllEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
