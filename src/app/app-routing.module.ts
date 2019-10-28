import { ProposalCommentComponent } from './proposal/proposal-comment/proposal-comment.component';
import { GraphComponent } from './graph/graph.component';
import { ParametersComponent } from './authentification/parameters/parameters.component';
import { AuthGuard } from './_helpers/auth.gard';
import { SurveyVoteComponent } from './survey/survey-vote/survey-vote.component';
import { SurveyCreateComponent } from './survey/survey-create/survey-create.component';
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
      { path: 'register', component: CreateaccountComponent },
      { path: 'login', component: EnteraccountComponent },
      { path: 'param/:id', component: ParametersComponent }
    ]},
  { path: 'proposal', component: ProposalComponent, canActivate: [AuthGuard], children : [
      { path: 'create', component: ProposalCreateComponent },
      { path: 'list', component: ProposalListComponent },
      { path: 'create/:id', component: ProposalCreateComponent },
      { path: 'comment/:id', component: ProposalCommentComponent }
    ]},
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard], children : [
      { path: 'create', component: SurveyCreateComponent },
      { path: 'list', component: SurveyListComponent },
      {path: 'vote/:id', component: SurveyVoteComponent}
    ]},
    { path: 'graph', component: GraphComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
