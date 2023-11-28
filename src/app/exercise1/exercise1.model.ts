export type Country = {
    description: string;
    id: string;
}

export type Countries = Country[];

function getCountryId(country: Country) {
    return country.id;
}