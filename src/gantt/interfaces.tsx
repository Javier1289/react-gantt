export interface ITask{
    taskId: number;
    startTime?:   string | undefined;
    endTime?:  string | undefined;
    color?:  string | undefined;
    body:any;
}

export interface ITaskDetail{
    left: string;
    top: string;
    display: string;
    task: ITask;
}