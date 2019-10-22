import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteraccountComponent } from './enteraccount.component';

describe('EnteraccountComponent', () => {
  let component: EnteraccountComponent;
  let fixture: ComponentFixture<EnteraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
