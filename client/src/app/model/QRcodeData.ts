export interface IQRcodeData{
    id: IQRcodeInfo;
    link: string;
    bitmap: string;
}
export interface IQRcodeInfo{
    timestamp: number;
    machine: number;
    pid: number;
    increment: number;
    creationTime: string;
}
