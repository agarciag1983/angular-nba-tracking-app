export interface IEnvironment {
    production: boolean,
    applicationTitle: string,
    endpoint: IEndpoint
}

export interface IEndpoint {
    nbaApiHeaderKeys: { 
        'X-RapidAPI-Key': string,
        'X-RapidAPI-Host': string
    }
    nbaApiHost: string,
    nbaApiImagesHost: string,
    teamGameDaysShow: number
}

