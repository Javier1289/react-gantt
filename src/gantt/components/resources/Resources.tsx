import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { GanttContext } from "../../context/GanttContext";
import { heightHeaderRow } from "../../helpers"
import { IExpandedRow, ITask } from "../../interfaces";

const getHeightForRow = (  tasks:ITask[], expandedRow: IExpandedRow, resourceId: any, height: number ) => {
    
    if( expandedRow.expanded && expandedRow.resourceId === resourceId){

        return  ( tasks ) ? ( tasks.length * height ) +'px': height + 'px';

    }else{

        return height + 'px';

    }

}

export const Resources = ( ) => {

    const {
        unitTime,
        config,
        privateConfig,
        configResources, 
        setConfigResources,
        ganttHeightRow
    } = useContext( GanttContext );

    const { tasks } = privateConfig;

  

    const handleClick = (  resourceId: any ) => {

        setConfigResources({
            resources: configResources.resources.map( resource => {
                if( resource.resourceId === resourceId ){
                    return {
                        expanded:!resource.expanded,
                        resourceId
                    }
                }else{
                    return resource;
                }
            } )
        })

    }

    return (
        <div className='gantt__resources'>

            <div className='gantt__resources--header' style = {{ height: heightHeaderRow( unitTime )}}> Resources </div>
            
            <div className="gantt__resources--body">
                {
                    config.resources.map( ( res, i ) => {
                        
                        const expandedRow = configResources.resources.filter( resource => resource.resourceId === res.resourceId )[0];

                        return ( 
                            <div 
                                className="gantt__resources__body--row" 
                                key = { i }
                                style = {{
                                    height: getHeightForRow( tasks[ res.resourceId ], expandedRow, res.resourceId, ganttHeightRow )
                                }}
                            >
                                <span
                                    className="gantt__resources__body__row--btn-expand" 
                                    onClick = { ( e ) => handleClick( res.resourceId ) }
                                >
                                    { 
                                        ( expandedRow.expanded && expandedRow.resourceId === res.resourceId ) 
                                            ? <FontAwesomeIcon icon={faChevronCircleUp} /> 
                                            : <FontAwesomeIcon icon={faChevronCircleDown} />
                                    }
                                    <span
                                        className="gantt__resources__body__row__btn--title" 
                                    >
                                        { res.name }
                                    </span>
                                </span>
                               
                            </div>
                        )
                    })
                }           
            </div>

        </div>
    )
}