import { Citizen } from '../_model/Citizen';

export class Proposal {
    proposalId: number;
    title: string;
    description: string;
    creatorProposal: Citizen;
}
