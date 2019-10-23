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
    this.proposals = this.service.proposals;
    this.service.findAll1().subscribe(
      (response) => {
        this.proposals = response._embedded.proposals;
      }

    );
  }

  delete(index) {
    this.service.delete(index).subscribe(
      (response) => {
        this.proposals = response._embedded.Proposals;
      }
    );
  }

  edit(index) {
    this.router.navigate(['/prosposal/createProposal', index]);
    this.service.editMode = true;
  }

}
