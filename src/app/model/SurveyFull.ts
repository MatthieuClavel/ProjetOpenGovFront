import { Citizen_SurveyWithCitizenDto } from './Citizen_SurveyWithCitizenDto';
export class SurveyFull {
    surveyId: number;
    question: string;
    possibleAnswers: string;
    result: string;
    numberRespondents: number;

    citizenSurveys: Citizen_SurveyWithCitizenDto[];
}
