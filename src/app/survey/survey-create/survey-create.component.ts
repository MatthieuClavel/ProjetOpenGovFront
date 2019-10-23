import { ServiceService } from './../../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sruvey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      // id: new FormControl(null, Validators.required),
      question : new FormControl(null, Validators.required),
      possible_answers: new FormControl(null, Validators.required)

    });
  }

  ajouter() {
    // écrire corps de la méthode
    this.form.reset();
  }

  update() {
    // écrire corps de la méthode
    this.router.navigate(['/survey/createSurvey']);
  }

}
