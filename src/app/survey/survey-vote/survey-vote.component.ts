import { Survey } from './../../model/Survey';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SurveyService } from 'src/app/_services/survey.service';

@Component({
  selector: 'app-survey-vote',
  templateUrl: './survey-vote.component.html',
  styleUrls: ['./survey-vote.component.css']
})
export class SurveyVoteComponent implements OnInit {
  index: any;
  constructor(private router: Router, private service: SurveyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.index = param['id'];
      if (this.index) {
        this.service.getOne(this.index).subscribe((response) => {
        });
        // this.form.setValue(this.service.proposals[this.index]);
      }
    });

  }

}
