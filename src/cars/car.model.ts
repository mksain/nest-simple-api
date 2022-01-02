export interface Car{
    id:string,
    title:string,
    description:string,
    status:CarStatus
}

export enum CarStatus{
    MARUTI="MARUTI",
    SCORPIO="SCORPIO",
    BOLERO="BOLERO"
}