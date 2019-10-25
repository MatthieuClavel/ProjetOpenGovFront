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
  result: any[];
  proposals: Proposal[];
  creator: any;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.loadAllProposals();
  }

  loadAllProposals() {
    this.proposals = this.service.proposals;
    this.service.findAll().subscribe(
      (response) => {
        this.result = response._embedded.proposals;
        this.result.forEach(proposal => {
          this.service.getCreator(proposal.proposalId).subscribe((creator) => {
            proposal.proposalCreator = creator;
          });
          this.proposals.push(proposal);
        });
        console.log(this.proposals);
      }
    );
  }

  delete(id) {
    if (confirm('Etes-vous sûr de vouloir supprimer ?')) {
      this.service.delete(id).subscribe(
        response => {
          // alert(response);
          // this.service.proposals.splice(id, 1);
          this.loadAllProposals();
        });
    }
  }

  edit(id) {
    this.router.navigate(['/proposal/createProposal', id]);
    this.service.editMode = true;
  }

  goToAdd() {
    this.router.navigate(['/proposal/createProposal']);
  }

}
