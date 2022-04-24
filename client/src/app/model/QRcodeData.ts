export interface IQRcodeData{
    id: IQRcodeInfo[];
    link: string;
    path: string;
}

export interface IQRcodeInfo{
    timestamp: number;
    creationTime: string;
}