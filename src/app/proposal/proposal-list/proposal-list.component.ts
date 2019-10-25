import { Proposal } from './../../model/Proposal';
import { ServiceService } from './../../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposals: any[];
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.loadAllProposals();
  }

  loadAllProposals() {
    this.proposals = this.service.proposals;
    this.service.findAll1().subscribe(
      (response) => {
        this.proposals = response._embedded.proposals;
      }

    );
  }

  delete(id) {
    alert(id);
    if ( confirm('Etes-vous sûr de vouloir supprimer ?')) {
    this.service.delete(id).subscribe(
      response => {
        // alert(response);
        // this.service.proposals.splice(id, 1);
        this.loadAllProposals();
      });
  } }

  edit(id) {
    // alert(id);
    this.router.navigate(['/proposal/createProposal', id]);
    this.service.editMode = true;
  }

}
