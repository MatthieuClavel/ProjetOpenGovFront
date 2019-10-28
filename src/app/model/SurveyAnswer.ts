import { SurveyResponse } from './Citizen_Survey_Response';
import { Citizen_SurveyWithCitizenDto } from './Citizen_SurveyWithCitizenDto';
export class SurveyAnswer {
    surveyId: number;
    question: string;
    possibleAnswers: string;
    result: string;
    numberRespondents: number;

    surveyResponseList: SurveyResponse[] = [];

    citizenSurveys: Citizen_SurveyWithCitizenDto[];
}
