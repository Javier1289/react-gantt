import moment from 'moment';
import { useState } from 'react';
import { usePresets } from '../hooks/usePresets';
import { ITaskDetail } from '../interfaces';
import { GanttContext } from './GanttContext';

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
    }}>
        { children }
    </GanttContext.Provider>

}

