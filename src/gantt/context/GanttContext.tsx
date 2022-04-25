import { createContext } from 'react';
import { IConfigResources, IExpandedRow, IGanttConfig, IGanttPrivateConfig, ITaskDetail } from '../interfaces';

export type GanttContextProps = {
    set_hours: ( date: string ) => void;
    set_days: ( date: string ) => void;
    set_weeks: ( date: string ) => void;
    set_months: ( date: string ) => void;
    set_years: ( date: string ) => void;
    startTime: string;
    range: number;
    unitTime: moment.unitOfTime.DurationConstructor;
    taskDetail: ITaskDetail;
    setTaskDetail: ( {}: ITaskDetail ) => void;
    config:IGanttConfig;
    setConfig: ( {}: IGanttConfig ) => void;
    privateConfig: IGanttPrivateConfig;
    setPrivateConfig: ( {}: IGanttPrivateConfig ) => void;
    configResources: IConfigResources;
    setConfigResources: ( {}: IConfigResources ) => void;

} 


export const GanttContext = createContext<GanttContextProps>({} as GanttContextProps);

