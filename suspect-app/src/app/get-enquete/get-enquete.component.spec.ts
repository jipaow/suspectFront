import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEnqueteComponent } from './get-enquete.component';

describe('GetEnqueteComponent', () => {
  let component: GetEnqueteComponent;
  let fixture: ComponentFixture<GetEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
