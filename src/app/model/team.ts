export interface ITeam {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
    logoUrl?: string;
}

export class UnknowTeam implements ITeam {
    
    id!: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
    logoUrl?: string;

    constructor() {
        this.abbreviation = 'U';
        this.city = this.division = this.full_name = this.conference = this.name = 'Unknow';
    }
}