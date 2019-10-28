import { ProposalFull } from '../../model/ProposalFull';
import { ServiceService } from './../../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposals: ProposalFull[];
  creator: any;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.loadAllProposals();
  }

  loadAllProposals() {
    this.proposals = this.service.proposals;
    this.service.findAll().subscribe(
      (response) => {
        this.proposals = response;
        });
  }

  delete(id) {
    if (confirm('Etes-vous sûr de vouloir supprimer ?')) {
      this.service.delete(id).subscribe(
        () => {
          this.loadAllProposals();
        });
    }
  }

  edit(id) {
    this.router.navigate(['/proposal/createProposal', id]);
  }

  goToAdd() {
    this.router.navigate(['/proposal/createProposal']);
  }

  goToComment(id) {
    this.router.navigate(['/proposal/commentProposal', id]);
  }

}
