import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnqueteComponent } from './create-enquete.component';

describe('CreateEnqueteComponent', () => {
  let component: CreateEnqueteComponent;
  let fixture: ComponentFixture<CreateEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
