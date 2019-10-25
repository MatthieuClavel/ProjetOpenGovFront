import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyVoteComponent } from './survey-vote.component';

describe('SurveyVoteComponent', () => {
  let component: SurveyVoteComponent;
  let fixture: ComponentFixture<SurveyVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
