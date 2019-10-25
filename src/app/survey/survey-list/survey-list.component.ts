import { Survey } from './../../model/Survey';
import { SurveyService } from './../../_services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: any[];
  constructor(private router: Router, private service: SurveyService) { }

  loadAllSurveys() {
    this.surveys = this.service.surveys;
    this.service.findAll1().subscribe(
      (response) => {
        this.surveys = response._embedded.surveys;
      });
  }
  ngOnInit() {
    this.loadAllSurveys();
  }

  delete(id) {
    alert(id);
    if (confirm('Etes-vous sûr de vouloir supprimer ?')) {
      this.service.delete(id).subscribe(
        (response) => {
          // alert(response);
          this.router.navigate(['survey/listSurvey']);
          location.reload();
        });
    }
  }

  RedirectToAdd() {
    this.router.navigate(['survey/createSurvey']);
  }

  RedirectToVote(id) {
    alert(id);
    this.router.navigate(['survey/voteSurvey', id]);
    // alert(id);
  }

}
