import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSuspectComponent } from './link-suspect.component';

describe('LinkSuspectComponent', () => {
  let component: LinkSuspectComponent;
  let fixture: ComponentFixture<LinkSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
