import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SruveyCreateComponent } from './sruvey-create.component';

describe('SruveyCreateComponent', () => {
  let component: SruveyCreateComponent;
  let fixture: ComponentFixture<SruveyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SruveyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SruveyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
