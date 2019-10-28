import { first } from 'rxjs/operators';
import { CitizenSurveyService } from './../../_services/CitizenSurveyService';
import { Citizen_SurveyFull } from './../../model/Citizen_SurveyFull';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SurveyFull } from './../../model/SurveyFull';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SurveyService } from 'src/app/_services/survey.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-survey-vote',
  templateUrl: './survey-vote.component.html',
  styleUrls: ['./survey-vote.component.css']
})
export class SurveyVoteComponent implements OnInit {
  index: any;
  public survey: SurveyFull;
  question: string;
  possibleResponses: any[];
  citizenAnswer = null;
  answerForm = new FormGroup({ answer: new FormControl(this.citizenAnswer, Validators.required) });
  citizenSurvey = new Citizen_SurveyFull();
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private service: SurveyService,
    private activatedRoute: ActivatedRoute,
    private citizenSurveyService: CitizenSurveyService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.index = param.id;
      if (this.index) {
        this.service.getOne(this.index).subscribe((response) => {
          this.survey = response;
          this.question = this.survey.question;
          this.possibleResponses = this.survey.possibleAnswers.split(',');

          this.survey.citizenSurveys.forEach(citizenSurvey => {
            if (citizenSurvey.citizen.login === this.authenticationService.currentUserValue.login) {
              this.citizenAnswer = citizenSurvey.vote;
            }
          });
        });
      }
    });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.answerForm.invalid) {
      return;
    }

    this.loading = true;

    this.citizenSurvey.vote = this.answerForm.get('answer').value;
    this.citizenSurvey.survey = this.survey;

    this.citizenSurveyService.save(this.citizenSurvey)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/survey/listSurvey']);
        },
        error => {
          this.loading = false;
        });
  }

}
