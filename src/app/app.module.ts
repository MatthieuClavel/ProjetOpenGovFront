import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProposalComponent } from './proposal/proposal.component';
import { SurveyComponent } from './survey/survey.component';
import { CreateaccountComponent } from './authentification/createaccount/createaccount.component';
import { EnteraccountComponent } from './authentification/enteraccount/enteraccount.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { ProposalCreateComponent } from './proposal/proposal-create/proposal-create.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { SurveyCreateComponent } from './survey/survey-create/survey-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphComponent } from './graph/graph.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { SurveyVoteComponent } from './survey/survey-vote/survey-vote.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ParametersComponent } from './authentification/parameters/parameters.component';
import { ProposalCommentComponent } from './proposal/proposal-comment/proposal-comment.component';
import { MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AuthentificationComponent,
    ProposalComponent,
    SurveyComponent,
    CreateaccountComponent,
    EnteraccountComponent,
    ProposalListComponent,
    ProposalCreateComponent,
    SurveyListComponent,
    SurveyCreateComponent,
    GraphComponent,
    HighchartsChartComponent,
    SurveyVoteComponent,
    ParametersComponent,
    ProposalCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



