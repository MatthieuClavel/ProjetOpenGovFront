import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CitizenService } from './../../_services/citizen.service';
import { Citizen } from './../../_model/Citizen';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {


  form: FormGroup;
  index: any;
  editMode: any;
  proposals: any[];
  proposal: any;

  constructor(
    private service: CitizenService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      citizenId: [0],
      login: ['', Validators.required],
      password: ['', Validators.required],
      // creatorProposal: [0]
    });

    this.activatedRoute.params.subscribe((param: Params) => {
      this.index = param.id;

      if (this.index) {
        this.service.getOne(this.index).subscribe((response) => {
          this.form.setValue(response);
        });
      }
    });
  }

  update() {
    this.service.update(this.form.value).subscribe(
      (response) => {
        this.router.navigate(['/accueil']);
      });
  }

}
