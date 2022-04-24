export interface IEventsData{
    id: IEventInfo[];
    yearList: IEventYearList[];
}

export interface IEventInfo{
    timestamp: number;
    machine: number;
    pid: number;
    increment: number;
    creationTime: string;
}

export interface IEventYearList{
    year: number;
    eventList: IEventList[];
}

export interface IEventList{
    eventName: string;
    eventData: string;
    eventDescription: string;
    eventPhotos: string[];
}