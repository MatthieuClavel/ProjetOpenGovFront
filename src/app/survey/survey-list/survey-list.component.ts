import { SurveyAnswer } from '../../_model/SurveyAnswer';
import { AuthenticationService } from './../../_services/authentication.service';
import { SurveyService } from './../../_services/survey.service';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit, AfterContentInit {

  constructor(
    private router: Router,
    private service: SurveyService,
    private authenticationService: AuthenticationService
  ) { }

  surveys: SurveyAnswer[];
  surveysWithAnswer: SurveyAnswer[] = [];
  surveyWithAnswer: SurveyAnswer;
  possibleResponses: any[];

  canvas: any;
  ctx: any;

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
            this.surveyWithAnswer.surveyResponseList[citizenSurvey.vote].number++;
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

  ngAfterContentInit() {
    this.canvas = document.getElementById('myChart9');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Entrée 1', 'Entrée 2'],
        datasets: [{
          label: 'Nombre de vote',
          data: [12, 102],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }

}
