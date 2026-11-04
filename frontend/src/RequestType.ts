export type Request = {
    id?: number,
    location: string,

}

export interface RequestType {
    location: string;
    callSign: string;
    numberOfPatients: number;
    precedence: string;
    specialEquipment: string;
    litterPatients: number;
    ambulatoryPatients: number;
    security: string;
    marking: string;
    patientNationality: string;
    nbcContamination: string;
    details: string;
}

export const sample9Line: RequestType[] = [
    {
        location: "Austin",
        callSign: "Callsign",
        numberOfPatients: 5,
        precedence: "Routine",
        specialEquipment: "None",
        litterPatients: 2,
        ambulatoryPatients: 3,
        security: "Enemies",
        marking: "Panels",
        patientNationality: "US Military",
        nbcContamination: "None",
        details: "View"
    },
    {
        location: "Orlando",
        callSign: "Callsign12",
        numberOfPatients: 3,
        precedence: "Convenience",
        specialEquipment: "Hoist",
        litterPatients: 1,
        ambulatoryPatients: 2,
        security: "Troops in the area",
        marking: "Smoke signal",
        patientNationality: "US Military",
        nbcContamination: "None",
        details: "View"
    }
];






