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
  proposals: any[];
  proposal: any;
  creator: any;

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      proposalId: [0],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.activatedRoute.params.subscribe((param: Params) => {
      this.index = param.id;
      if (this.index) {
        this.service.getOne(this.index).subscribe((response) => {
          this.form.setValue(response);
        });
        this.service.getCreator(this.index).subscribe((creator) => {
          this.creator = creator.login;
        });
      }
    });
    this.editMode = this.service.editMode;
  }

  ajouter() {
    this.service.add(this.form.value).subscribe(
      (data) => {
        this.router.navigate(['/proposals/listProposal']);
      });

  }

  update() {
    this.service.update(this.form.value).subscribe(
      (response) => {
        this.service.editMode = false;
        this.editMode = false;
        this.router.navigate(['/proposals/listProposal']);
      });
  }

}
