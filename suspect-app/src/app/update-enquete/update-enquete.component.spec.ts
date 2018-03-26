import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnqueteComponent } from './update-enquete.component';

describe('UpdateEnqueteComponent', () => {
  let component: UpdateEnqueteComponent;
  let fixture: ComponentFixture<UpdateEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
