import { ProposalFull } from '../../_model/ProposalFull';
import { ProposalService } from '../../_services/proposal.service';
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

  constructor(
    private router: Router,
    private service: ProposalService
    ) { }

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
        (response) => {
          this.router.navigate(['proposal/list']);
        });
    }
  }

  edit(id) {
    this.router.navigate(['/proposal/create', id]);
  }

  goToAdd() {
    this.router.navigate(['/proposal/create']);
  }

  goToComment(id) {
    this.router.navigate(['/proposal/comment', id]);
  }

}
