import './styles.css';
import { useContext } from 'react';
import { TaskFilterContext } from '../../context/TaskFilterContext';

interface Props{
    tasks: any[];
}

export const TableInfo = ( { tasks }: Props) => {

    let fields = [
        "taskId",
		"color",
		"resourceId",
		"startTime",
		"endTime",
		"body"
    ];
    
    const { filters } = useContext( TaskFilterContext );
    
    const { value } = filters;

    const filter = ( value ) ? value.toString() : '';
    
    let counter = 0;

    return (
        <div className='table__info'>

            <table className=''>
                <thead className='table__info--header'>
                    <tr>
                        {
                            fields.map( field => {
                                
                                let thClassname = ( field === 'body' ) ? 'th__body' : '';
                                
                                return ( <th className={ thClassname } key={ field }>{ field }</th> )
                            
                            })
                        }
                    </tr>
                </thead>
                <tbody className='table__info--body'>
                    {
                        tasks.map( ( task ) => {

                            let showFilters = false;
                           
                            if( filter !== '' && (
                                task.taskId.toString().toLowerCase().includes( filter.toLowerCase() ) |
                                task.resourceId.toString().toLowerCase().includes( filter.toLowerCase() ) |
                                task.startTime.toString().toLowerCase().includes( filter.toLowerCase() ) |
                                task.endTime.toString().toLowerCase().includes( filter.toLowerCase() ) ||
                                JSON.stringify( task.body ).toLowerCase().includes(filter.toLowerCase() )
                            )){
                                showFilters = true;
                            } 

                            if( filter === '' ){
                                
                                showFilters = true;

                            } 

                            if(
                                showFilters
                            ){

                                const classname = ( counter % 2 === 0 ) ? 'tr_pair' : '';
                                
                                counter++;

                                return (
                                    <tr className={ classname } key={ 'tr_'+task.taskId }>
                                        {
                                            fields.map( ( field, i ) => {
                                                
                                                if( field === 'body' ){
                                                    
                                                    return ( 
                                                        <td className = "td__body" key = { task.taskId +'_'+i }>
                                                            <span key = { 'span_'+task.taskId+'_'+i } className='span__responsive--field'>{ field }</span> 
                                                            <span className='span__responsive--value'>{ JSON.stringify( task[ field ], null, 2 ) }</span>
                                                        </td> 
                                                    )
    
                                                }else{
                                                    
                                                    return ( 
                                                        <td key = { task.taskId +'_'+i }>
                                                        
                                                            <span key = { 'span_'+task.taskId+'_'+i } className='span__responsive--field'>{ field }</span> 
                                                            <span className='span__responsive--value'>{ task[ field ] }</span>
                                                        
                                                        </td> )
                                                
                                                }
    
                                            })
                                        }
                                    </tr>   
                                )

                            }

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
