export interface RequestType {
    location:string;
    callSign:string;
    precedence: string;
    specialEquipment: string;
    security: string;
    marking: string;
    details: string;

}

export const sample9Line:RequestType[] =[
    {
        location: 'Austin',
        callSign: 'Callsign',
        precedence: 'Routine',
        specialEquipment: 'None',
        security: 'Enemies',
        marking: 'Panels',
        details: 'View'

    },

    {
        location: 'Orlando',
        callSign: 'Callsign12',
        precedence: 'Convenience',
        specialEquipment: 'Hoist',
        security: 'Troops in the area',
        marking: 'Smoke signal',
        details: 'View'

    }


]




