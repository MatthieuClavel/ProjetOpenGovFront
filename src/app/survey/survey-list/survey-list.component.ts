import { SurveyAnswer } from '../../_model/SurveyAnswer';
import { AuthenticationService } from './../../_services/authentication.service';
import { SurveyService } from './../../_services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: SurveyAnswer[];
  surveysWithAnswer: SurveyAnswer[] = [];
  surveyWithAnswer: SurveyAnswer;
  possibleResponses: any[];

  constructor(
    private router: Router,
    private service: SurveyService,
    private authenticationService: AuthenticationService
  ) { }

  loadAllSurveys() {
    this.service.findAll().subscribe(
      (response) => {
        this.surveys = response;

        this.surveys.forEach(survey => {
          this.surveyWithAnswer = survey;
          this.possibleResponses = survey.possibleAnswers.split(',');

          this.surveyWithAnswer.surveyResponseList = [];
          this.possibleResponses.forEach(element => {
            this.surveyWithAnswer.surveyResponseList.push({ result: element, number: 0 });
          });

          survey.citizenSurveys.forEach(citizenSurvey => {
            if (citizenSurvey.citizen.login === this.authenticationService.currentUserValue.login) {
              this.surveyWithAnswer.result = this.possibleResponses[citizenSurvey.vote];
            }
            this.surveyWithAnswer.surveyResponseList[citizenSurvey.vote].number ++;
          });



          this.surveysWithAnswer.push(this.surveyWithAnswer);
        });


      });
  }
  ngOnInit() {
    this.loadAllSurveys();
  }

  delete(id) {
    if (confirm('Etes-vous sûr de vouloir supprimer ?')) {
      this.service.delete(id).subscribe(
        (response) => {
          this.router.navigate(['survey/list']);
          location.reload();
        });
    }
  }

  RedirectToAdd() {
    this.router.navigate(['survey/create']);
  }

  RedirectToVote(id) {
    this.router.navigate(['survey/vote', id]);
  }

}
