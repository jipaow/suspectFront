import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuspectComponent } from './update-suspect.component';

describe('UpdateSuspectComponent', () => {
  let component: UpdateSuspectComponent;
  let fixture: ComponentFixture<UpdateSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
