import { Proposal } from './../../model/Proposal';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServiceService } from './../../../Service/service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-create',
  templateUrl: './proposal-create.component.html',
  styleUrls: ['./proposal-create.component.css']
})
export class ProposalCreateComponent implements OnInit {

  form: FormGroup;
  index: any;
  editMode: any;

  // tslint:disable-next-line:max-line-length
  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      creatorProposal: ['']
    });
    // this.form = new FormGroup({
    // title: new FormGroup(),
    // description: new FormGroup()
    // });
    this.activatedRoute.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.index = param['index'];
      if (this.index) {
        this.form.setValue(this.service.proposals[this.index]);
      }
    });
    this.editMode = this.service.editMode;
  }

  ajouter() {
    alert(this.form.value.creatorProposal);
    this.service.add(this.form.value).subscribe(
      (data) => {
        //  this.router.navigate(['/proposal/listProposal']);
      });
    // console.log(this.service.proposals);
    // this.form.reset();
  }

  update() {
    this.service.proposals.splice(this.index, 1, this.form.value);
    this.router.navigate(['/proposal/createProposal']);
    this.service.editMode = false;
  }


}
