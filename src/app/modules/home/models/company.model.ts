export class CompanyModel {
    name: string;
    description: string;
    valuation: number;
    relatedCompanies: {name: string, value: number }[];
}
