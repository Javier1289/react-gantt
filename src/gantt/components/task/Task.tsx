import { useContext, useState } from 'react';
import { GanttContext } from '../../context/GanttContext';
import { ITask } from '../../interfaces';
import './styles.css';


interface Props{
	offset: any;
	width:any;
	top:any;
	color:any;
	task:ITask;
}



export const Task = ( { offset, width, top, color, task }: Props ) => {		

	const { setTaskDetail } = useContext( GanttContext );

	const { taskId, startTime, endTime, body } = task;

	const handleClick = ( e:React.MouseEvent<HTMLDivElement, MouseEvent>, task: ITask ) => {
	
		setTaskDetail({
			left: e.nativeEvent.clientX + 'px',
			top: e.nativeEvent.clientY + 'px',
			display:'block',
			task
		})
	
	}
	

	return (		
    	<div className='gantt__task--element'
			data-starttime = { startTime }
			data-endtime = { endTime }
			data-taskid = { taskId }
			style={ {
				
				left:offset,
				width,
				top,
				backgroundColor:color,
				opacity:'0.8'
			}}
			onClick = { ( e ) => handleClick( e, task ) }
		>
		</div>
  	)
}
