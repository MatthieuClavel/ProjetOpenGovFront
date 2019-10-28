import { ProposalFull } from '../../_model/ProposalFull';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProposalService } from '../../_services/proposal.service';
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
  editMode = false;
  proposals: ProposalFull[];
  proposal: ProposalFull;
  creatorLogin = 'Moi';

  constructor(
    private service: ProposalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      proposalId: [0],
      title: ['', Validators.required],
      description: ['', Validators.required],
      creatorProposal: [null],
      citizenProposals: [null]
    });
    this.activatedRoute.params.subscribe((param: Params) => {
      this.index = param.id;
      if (this.index) {
        this.service.getOne(this.index).subscribe((response) => {
          this.editMode = true;
          this.form.setValue(response);
          this.creatorLogin = response.creatorProposal.login;
        });
      }
    });
  }

  ajouter() {
    this.service.add(this.form.value).subscribe(
      (data) => {
        this.router.navigate(['/proposal/list']);
      });

  }

  update() {
    this.service.update(this.form.value).subscribe(
      (response) => {
        this.editMode = false;
        this.router.navigate(['/proposal/list']);
      });
  }

}
