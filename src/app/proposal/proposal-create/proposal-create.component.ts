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

  // tslint:disable-next-line:max-line-length
  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      proposalId: [0],
      title: ['', Validators.required],
      description: ['', Validators.required],
      // creatorProposal: [0]
    });
    // this.form = new FormGroup({
    // title: new FormGroup(),
    // description: new FormGroup()
    // });
    this.activatedRoute.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.index = param['id'];
      // alert(this.index);
      if (this.index) {
        this.service.getOne(this.index).subscribe((response) => {
          this.form.setValue(response);
        });
        // this.form.setValue(this.service.proposals[this.index]);
      }
    });
    this.editMode = this.service.editMode;
  }

  ajouter() {
    this.service.add(this.form.value).subscribe(
      (data) => {
        //  this.router.navigate(['/proposal/listProposal']);
        // this.form.reset();
        // this.loadAllProposals();
        this.router.navigate(['proposals/listProposals']);
      });
    // console.log(this.service.proposals);

  }

  update() {
    this.service.update(this.form.value).subscribe(
      (response) => {

        // this.proposals.indexOf(this.proposals);
        this.service.editMode = false;
        this.editMode = false;
        // this.loadAllProposals();
        this.router.navigate(['/proposal/listProposal']);
      });
  }

  loadAllProposals() {
    this.proposals = this.service.proposals;
    this.service.findAll1().subscribe(
      (response) => {
        this.proposals = response._embedded.proposals;
      }
    );
  }



}
