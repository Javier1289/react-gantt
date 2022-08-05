import moment from "moment";
import { getFirstDayOfWeek, getLastDayOfWeek, heightHeaderRow, widthHeaderRow } from '../../helpers';
import { useContext } from 'react';
import { GanttContext } from '../../context/GanttContext';

interface IHeaderTitle{
    unit: any;
    unitTime: moment.unitOfTime.DurationConstructor;
    center:React.MutableRefObject<any> | null;
}

export const HeaderTitle = ({ unit, unitTime, center }: IHeaderTitle ) => {
    
    const { ganttWidthRow } = useContext( GanttContext );

    const today = moment();
    
    const nDate = moment( unit );    

    const Y = nDate.format('YYYY');
    const M = nDate.format('MM');
    const D = nDate.format('DD');
    const H = nDate.format('HH');

    const style = {
        height: heightHeaderRow( unitTime ),
        width: widthHeaderRow(nDate.format('YYYY-MM-DD HH:mm:ss'), unitTime, ganttWidthRow )
    }
    
    let setedRef = null; 

    switch( unitTime ){

        case 'hours':           

            setedRef = ( today.format('YYYY-MM-DD HH') === nDate.format( 'YYYY-MM-DD HH' ) ) ? center : null; 
        
            return (<div
                        ref = { setedRef } 
                        className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >
                        <p> { H } Hs </p>  
                        <p>{ D +'-'+ M +'-'+ Y }</p>  
                    </div>);

        case 'days':
                
            setedRef = ( today.format('YYYY-MM-DD') === nDate.format( 'YYYY-MM-DD' ) ) ? center : null;

            return (<div 
                        ref = { setedRef }
                        className="gantt__content__header--unit"
                        style = {{ ...style }}
                    > 
                        <p>{ D +'-'+ M +'-'+ Y }</p>  
                    </div>);

        case 'weeks':

            const firstDayOfWeek = getFirstDayOfWeek( unit );
            
            const lastDayOfWeek = getLastDayOfWeek( unit );

            const init = firstDayOfWeek.format('DD-MM-YYYY');

            const end = lastDayOfWeek.format('DD-MM-YYYY');
            
            return (<div
                        ref = { setedRef }
                        className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >
                        <p>From { init }</p>
                        <p>To { end }</p>
                    </div>);
            
        case 'months':

            setedRef = ( today.format('YYYY-MM') === nDate.format( 'YYYY-MM' ) ) ? center : null;

            return (<div 
                        ref = { setedRef }
                        className="gantt__content__header--unit"
                        style = {{ ...style }}
                    > <p>{ Y +'-'+ M }</p></div>);
            
        case 'years':

            setedRef = ( today.format('YYYY') === nDate.format( 'YYYY' ) ) ? center : null;

            return (<div 
                        ref = { setedRef }
                        className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >{  <p>{ Y }</p> }</div>);
        
        default:
            return (<div 
                        ref = { setedRef }
                        className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >{ unit }</div>);
            
    }
}
