import { useContext, useRef, useEffect } from "react";
import { GanttContext } from "../../context/GanttContext";
import { getUnitsTimeInRange } from "../../helpers";
import { HeaderTitle } from "../headerTitle/HeaderTitle";
import { Resources } from "../resources/Resources";
import { Row } from "../row/Row";


export const Body = ( ) => {

    const {
        startTime,
        range,
        unitTime,
        config,
        privateConfig
    } = useContext( GanttContext );

    const { tasks: taskHash } = privateConfig;

    const units = getUnitsTimeInRange(startTime, range , unitTime );    

    const ref = useRef( null );

    useEffect(() => {
        
        const a: any = ref.current;

        if( a ){
            a.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
              });
        }

    }, [ units ])
    

    return (
        <div className='gantt__body'>

            <Resources />

            <div className='gantt__content'>
                <div className="gantt__content--header">
                {
                    units.map( (unit, i)  => ( 
                                <HeaderTitle 
                                    key = { i } 
                                    unit = { unit } 
                                    unitTime = { unitTime }
                                    center = { ref }
                                /> 
                    ))
                }
                </div>
                <div className="gantt__content--body">
                {
                    config.resources.map( ( res, i ) => {                              

                        return <Row 
                                    key = { i }
                                    units = { units }
                                    unitTime = { unitTime }
                                    tasks = { ( taskHash[ res.resourceId ] ) ? taskHash[ res.resourceId ] : [] }
                                    resourceId = { res.resourceId }
                                />
                        
                    })
                }                            
                </div>
            </div>
        </div>
    )
}
