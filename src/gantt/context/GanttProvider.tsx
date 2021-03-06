import moment from 'moment';
import { useState } from 'react';
import { usePresets } from '../hooks/usePresets';
import { ITaskDetail, IGanttConfig, IGanttPrivateConfig, IExpandedRow, IConfigResources } from '../interfaces';
import { GanttContext } from './GanttContext';
import { useDimension } from '../hooks/useDimensions';

interface Props{
    children: JSX.Element | JSX.Element[];
}

export const GanttProvider = ( { children }: Props ) => {
    
    const date = moment().format('YYYY-MM-DD HH:mm:ss');

    const {
        set_hours,
        set_days,
        set_weeks,
        set_months,
        set_years,
        startTime,
        range,
        unitTime
    } = usePresets( {
        startTime: date,
        unitTime: 'days',
        range: 30
    })

    const [ config,  setConfig ] = useState<IGanttConfig>({
        tasks:[],
        resources:[],
        tableInfo:false,
        filters:false,
    })

    const [ privateConfig, setPrivateConfig ] = useState<IGanttPrivateConfig>({
        keys:[],
        tasks:[]
    })

    const [ taskDetail, setTaskDetail ] = useState<ITaskDetail>({
		left:'0px',
		top:'0px',
		display:'none',
		task:{
            taskId:0,
			color: "",
			startTime: "",
			endTime:   "",
			body:{},
        }
	});

    const [ configResources, setConfigResources ] = useState<IConfigResources>({
        resources:[]
    })


    const {
        set_desktop,
        set_mobile,
        set_zoom,
        ganttHeightRow,
        ganttHeightTask,
        ganttWidthRow
    } = useDimension({
        ganttHeightRow:23,
        ganttHeightTask: 20,
        ganttWidthRow: 1
    });
    
    return <GanttContext.Provider value = {{
        set_hours,
        set_days,
        set_weeks,
        set_months,
        set_years,
        startTime,
        range,
        unitTime,
        taskDetail,
        setTaskDetail,
        config,
        setConfig,
        privateConfig, 
        setPrivateConfig,
        configResources, 
        setConfigResources,
        set_desktop,
        set_mobile,
        set_zoom,
        ganttHeightRow,
        ganttHeightTask,
        ganttWidthRow,
    }}>
        { children }
    </GanttContext.Provider>

}

