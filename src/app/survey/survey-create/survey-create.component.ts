import { SurveyService } from './../../_services/survey.service';
import { ServiceService } from './../../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-sruvey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent implements OnInit {
  form: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formbuilder: FormBuilder, private service: SurveyService) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      surveyId: [0],
      question: ['', Validators.required],
      possibleAnswers: ['', Validators.required]
    });
  }


ajouter() {
  alert(this.form.value);
  this.service.add(this.form.value).subscribe(
    (response) => {
      // this.form.reset();
      this.router.navigate(['survey/listSurvey']);
    }
  );
}



}
