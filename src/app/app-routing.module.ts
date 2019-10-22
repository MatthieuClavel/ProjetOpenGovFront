import { SruveyCreateComponent } from './survey/sruvey-create/sruvey-create.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { SurveyComponent } from './survey/survey.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { ProposalCreateComponent } from './proposal/proposal-create/proposal-create.component';
import { ProposalComponent } from './proposal/proposal.component';
import { EnteraccountComponent } from './authentification/enteraccount/enteraccount.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CreateaccountComponent } from './authentification/createaccount/createaccount.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'authentification', component: AuthentificationComponent, children : [
      { path: 'createAccount', component: CreateaccountComponent },
      { path: 'enterAccount', component: EnteraccountComponent }
    ]},
  { path: 'proposal', component: ProposalComponent, children : [
      { path: 'createProposal', component: ProposalCreateComponent },
      { path: 'listProposal', component: ProposalListComponent }
    ]},
  { path: 'survey', component: SurveyComponent, children : [
      { path: 'createSurvey', component: SruveyCreateComponent },
      { path: 'listSurvey', component: SurveyListComponent }
    ]},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
