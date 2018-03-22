import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuspectComponent } from './edit-suspect.component';

describe('EditSuspectComponent', () => {
  let component: EditSuspectComponent;
  let fixture: ComponentFixture<EditSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
