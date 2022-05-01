export interface IGanttConfig{
    tasks:any[];
    resources:any[];
    tableInfo:boolean;
    filters:boolean;
}

export interface IGanttPrivateConfig{
    keys:any[];
    tasks:any[];
}

export interface IGanttHeightConfig{
    rowHeight: number;
    taskHeight: number;
}

export interface ITask{
    taskId: number;
    startTime?:   string | undefined;
    endTime?:  string | undefined;
    color?:  string | undefined;
    resourceId?: string | undefined;
    body:any;

}

export interface ITaskDetail{
    left: string;
    top: string;
    display: string;
    task: ITask;
}

export interface IConfigResources {
    resources: IExpandedRow[];
}

export interface IExpandedRow{
    resourceId: any | null;
    expanded: boolean;
}


export interface IDimensionScreen{
    ganttHeightRow: number;
    ganttHeightTask: number;
    ganttWidthRow: number;
}
