import { useContext } from 'react';
import { getUnitsTimeInRange, heightHeaderRow } from './helpers';
import { Filters } from './components/filter/Filters';
import { Row } from './components/row/Row';
import { HeaderTitle } from './components/headerTitle/HeaderTitle';
import { GanttContext } from './context/GanttContext';
import { TaskFilterProvider } from './context/TaskFilterProvider';
import { TaskDetail } from './components/taskDetail/TaskDetail';
import { TableInfo } from './components/tableInfo/TableInfo';
import './styles.css';

interface Props{
    tasks: any[];
    resources:any[];
    tableInfo:boolean;
    filters:boolean;
}


const createHashResourceTask = ( resources: any[], tasks:any[] ) => {

    let hashMap:any = {};

    let bodiesKeys: any = [];

    const arrayResources = resources.map( res => res.resourceId );

    tasks.forEach( ( task ) => {

        if( task.body ){
            
            const fields = Object.getOwnPropertyNames( task.body);

            fields.forEach( ( field: any ) => {
                
                if( !bodiesKeys.includes( field ) ){

                    bodiesKeys = [ ...bodiesKeys, field ];

                }

            })

        }

        if( !hashMap[ task.resourceId ] && arrayResources.includes( task.resourceId ) ){

            hashMap = {
                ...hashMap,
                [ task.resourceId ]: [ task ]
            }

        }else{

            hashMap[ task.resourceId ] = [ ...hashMap[ task.resourceId ], task ];

        }

    })    

    return {
        bodiesKeys,
        hashMap
    };

}



export const Gantt = ( { resources, tasks, tableInfo = false, filters = false }: Props ) => {
    
    const {
        startTime,
        range,
        unitTime,
    } = useContext( GanttContext );
    
    const { bodiesKeys, hashMap: taskHash} = createHashResourceTask( resources, tasks );

    const units = getUnitsTimeInRange(startTime, range , unitTime );    

    return (
        <TaskFilterProvider>
            <div className="gantt">  
                {( 
                    filters && 
                    <Filters 
                        filterKeys = { bodiesKeys }
                    />
                    
                )}
                
                <div className='gantt__body'>

                    <div className='gantt__resources'>

                        <div className='gantt__resources--header' style = {{ height: heightHeaderRow( unitTime )}}> Resources </div>
                        <div className="gantt__resources--body">
                            {
                                resources.map( ( res, i ) => ( 
                                    <div 
                                        className="gantt__resources__body--row" 
                                        key = { i }
                                    >
                                        { res.name }
                                    </div> 
                                ))
                            }
                        </div>
                    </div>

                    <div className='gantt__content'>
                        <div className="gantt__content--header">
                        {
                            units.map( (unit, i)  => ( 
                                        <HeaderTitle 
                                            key = { i } 
                                            unit = { unit } 
                                            unitTime = { unitTime }
                                        /> 
                            ))
                        }
                        </div>
                        <div className="gantt__content--body">
                        
                        {
                            resources.map( ( res, i ) => {                                                    
                                
                                return <Row 
                                            key = { i }
                                            units = { units }
                                            unitTime = { unitTime }
                                            tasks = { ( taskHash[ res.resourceId ] ) ? taskHash[ res.resourceId ] : [] }
                                        />
                                
                            })
                        }                            
                        </div>
                    </div>
                </div>

                <TaskDetail />

                {( 
                    tableInfo && 
                    
                    <TableInfo  
                        tasks = { tasks }
                    />
                )}
        
            </div>
        </TaskFilterProvider>
    );

}

