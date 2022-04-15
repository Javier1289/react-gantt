import { useCallback, useState, useContext } from 'react';
import moment from 'moment';
import { formatEndTime, formatFirstTime, widthHeaderRow } from '../../helpers';
import { Task } from '../task/Task';
import { TaskFilterContext } from '../../context/TaskFilterContext';
import { ITask } from '../../interfaces';

interface Props{
    tasks: ITask[];
    units: any;
    unitTime: any;
}

const getTotalSeconds = ( init: any, end: any ) => {

    const seconds = init.diff(end, 'seconds');

    return Math.abs( seconds );

}


const getOffsetWidth = ( startTime: any , firstTimeUnits: any, parentElementWidth:any, totalTime: any, unitTime: any ) => {
        
    startTime = moment( startTime );

    const seconds = startTime.diff( firstTimeUnits , 'seconds' );

    const offset = ( seconds * parentElementWidth ) / totalTime;
    
    return (offset >= 0 ) ? offset : 0;

}


const getDurationTask = ( startTime: any, endTime: any, firstTimeUnits:any, lastTimeUnits:any, parentElementWidth:any, totalTime: any, unitTime: any ) => {

    startTime = moment( startTime );
    
    endTime = moment( endTime );
    
    if( startTime <= firstTimeUnits ){
        
        startTime = firstTimeUnits;
    
    }

    if( endTime >= lastTimeUnits ){

        endTime = lastTimeUnits;

    }

    const duration = endTime.diff( startTime, 'seconds' );
    
    const widthTask = ( duration * parentElementWidth ) / totalTime;
    
    return widthTask;

} 


const showTask = ( task:ITask, firstTimeUnits: any, lastTimeUnits:any ) => {

    
    if( moment( task.startTime ) > lastTimeUnits ){
        
        return false;
        
    }
    
    if( moment( task.endTime ) < firstTimeUnits ){
        
        return false;
        
    }

    return true;

}


export const Row = ( { tasks, units, unitTime } : Props ) => {         

    const { filters } = useContext( TaskFilterContext );

    const { key, value } = filters;

    const tasksFiltered = tasks.filter( task => {
        
        if( key && value ){
            
            if( task.body[ key ] ){
                
                return task.body[ key ].toLowerCase().includes( value.toString().toLowerCase() );                                            
            
            }else{

                return false;

            }

        }else{

            return true;
        
        }

    }); 

    const firstTimeUnits = formatFirstTime( units[0], unitTime );
    
    const lastTimeUnits = formatEndTime( units[ units.length - 1 ], unitTime );
    
    const totalTime = getTotalSeconds( firstTimeUnits, lastTimeUnits );

    const [ width, setWidth ] = useState(0);

    //El tamaño de taskContainer cambia con cada cambio en las unidades
    const taskContainer = useCallback( node => {
        
        if (node !== null) {
        
            setWidth( node.getBoundingClientRect().width );
        
        }

    }, [units]);

    let indexTask = 0;

    return (
        <div className="gantt__content__body--row" >
            <div 
                ref={ taskContainer } 
                className="gantt__task--container"            
            >                            
                {
                    tasksFiltered.map( ( task: ITask, i: number ) => {   
                        
                        const { taskId, startTime, endTime,color, body } = task;

                        if( showTask( { taskId, startTime, endTime, body }, firstTimeUnits, lastTimeUnits  ) ){
                            
                            const offset = getOffsetWidth( startTime , firstTimeUnits, width, totalTime, unitTime );                    
                            
                            const widthTask = getDurationTask( startTime, endTime, firstTimeUnits, lastTimeUnits, width, totalTime, unitTime );                    

                            const top = -23 * indexTask;
                            
                            indexTask++;

                            return <Task 
                                        key = { i } 
                                        task = { task }
                                        offset = { offset }
                                        width = { widthTask }
                                        top = { top }
                                        color = { color }
                                    />

                        }

                    } )
                } 
            </div>
        {
            units.map( (unit: any, i: number)  => ( 
                <div 
                    className="gantt__content__body__row--unit" 
                    key = { i }
                    style = {{ width: widthHeaderRow( unit, unitTime )}}
                >
                    
                </div> 
            ))
        }
        </div> 
    )

}
