import { Citizen_ProposalWithCitizen } from './Citizen_ProposalWithCitizen';
import { Citizen } from '../_model/Citizen';

export class ProposalFull {
    proposalId: number;
    title: string;
    description: string;

    creatorProposal: Citizen;
    citizenProposals: Citizen_ProposalWithCitizen[];
}
