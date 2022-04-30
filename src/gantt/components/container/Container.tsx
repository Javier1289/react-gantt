import { useContext, useEffect } from 'react';
import { IGanttConfig } from '../../interfaces';
import { GanttContext } from '../../context/GanttContext';
import { Filters } from '../filter/Filters';
import { TaskDetail } from '../taskDetail/TaskDetail';
import { Body } from '../body/Body';
import { TableInfo } from '../tableInfo/TableInfo';
import './styles.css';


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



export const Container = ( { resources, tasks, tableInfo = false, filters = false }: IGanttConfig ) => {
    
    const { 
        config,
        setConfig,
        setPrivateConfig,
        configResources, 
        setConfigResources,
        set_desktop,
        set_mobile
    } = useContext( GanttContext );
    
    const { bodiesKeys, hashMap } = createHashResourceTask( resources, tasks );

    const handleResize = () => ( window.innerWidth > 768 ) ? set_desktop() : set_mobile();

    useEffect(() => {
      
        setConfig({ 
            ...config,
            resources,
            tasks, 
            tableInfo, 
            filters 
        });

        setPrivateConfig({
            keys: bodiesKeys,
            tasks: hashMap
        })

        setConfigResources({
            resources: resources.map( resource => {
                return {
                    expanded: false,
                    resourceId: resource.resourceId
                }
            })
        })

        handleResize();
      
        window.addEventListener('resize', handleResize);
      
    }, [])
    

    

    return (
        
            <div className="gantt">  
                {( 
                    filters && 
                    <Filters 
                        filterKeys = { bodiesKeys }
                    />
                    
                )}
                
                <Body />

                <TaskDetail />

                {( 
                    tableInfo && 
                    
                    <TableInfo  
                        tasks = { config.tasks }
                    />
                )}
        
            </div>
        
    );

}