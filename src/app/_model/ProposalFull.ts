import { Citizen_ProposalWithCitizen } from './Citizen_ProposalWithCitizen';
import { Citizen } from './Citizen';

export class ProposalFull {
    proposalId: number;
    title: string;
    description: string;

    creatorProposal: Citizen;
    citizenProposals: Citizen_ProposalWithCitizen[];
}
