import { first } from 'rxjs/operators';
import { SurveyService } from './../../_services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Survey } from 'src/app/_model/Survey';

@Component({
  selector: 'app-sruvey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent implements OnInit {

  form: FormGroup;
  possibleAnswers: FormArray;
  loading = false;
  submitted = false;
  survey = new Survey();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: SurveyService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      surveyId: [0],
      question: ['', Validators.required],
      possibleAnswers: this.formBuilder.array( [this.initItem()] )
    });
    this.possibleAnswers = this.form.get('possibleAnswers') as FormArray;
    this.possibleAnswers.push(this.initItem());
  }

  initItem(): FormGroup {
    return this.formBuilder.group({
      answer: ['', Validators.required]
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      answer: ['']
    });
  }

  addItem(): void {
    this.possibleAnswers = this.form.get('possibleAnswers') as FormArray;
    this.possibleAnswers.push(this.createItem());
  }


  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.survey.question = this.form.value.question;
    this.survey.possibleAnswers = this.possibleAnswers.value[0].answer;
    for (let index = 1; index < this.possibleAnswers.value.length; index++) {
      this.survey.possibleAnswers = this.survey.possibleAnswers + ',' + this.possibleAnswers.value[index].answer;
    }
    this.service.save(this.survey)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/survey/list']);
        },
        error => {
          this.loading = false;
        });
  }



}
