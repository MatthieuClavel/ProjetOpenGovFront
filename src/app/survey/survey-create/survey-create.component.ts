import { first } from 'rxjs/operators';
import { SurveyService } from './../../_services/survey.service';
import { ServiceService } from './../../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
import { SurveyFull } from 'src/app/model/SurveyFull';
import { Survey } from 'src/app/model/Survey';

@Component({
  selector: 'app-sruvey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  survey = new Survey();

  // tslint:disable-next-line:max-line-length
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder,
    private service: SurveyService
  ) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      surveyId: [0],
      question: ['', Validators.required],
      possibleAnswers: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.survey = this.form.value;
    alert(this.survey);
    this.service.save(this.survey)
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
