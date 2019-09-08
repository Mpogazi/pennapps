import { CompanyModel } from '../models/company.model';

export const sample_companies: CompanyModel[] = 
[
    {
        name: "FB",
        description: "Just another money machine",
        valuation: 4500,
        relatedCompanies: [
            { name: "Google", value: 50000 },
            { name: "Amazon", value: 63400 },
            { name: "Apple", value: 800000 }
        ]
    },
    {
        name: "FB",
        description: "Just another money machine",
        valuation: 4500,
        relatedCompanies: [
            { name: "Google", value: 50000 },
            { name: "Amazon", value: 63400 },
            { name: "Apple", value: 800000 }
        ]
    },
    {
        name: "FB",
        description: "Just another money machine",
        valuation: 4500,
        relatedCompanies: [
            { name: "Google", value: 50000 },
            { name: "Amazon", value: 63400 },
            { name: "Apple", value: 800000 }
        ]
    }
]