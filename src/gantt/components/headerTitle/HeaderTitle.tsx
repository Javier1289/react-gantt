import moment from "moment";
import { getFirstDayOfWeek, getLastDayOfWeek, heightHeaderRow, widthHeaderRow } from '../../helpers';
import { useContext } from 'react';
import { GanttContext } from '../../context/GanttContext';

interface IHeaderTitle{
    unit: any;
    unitTime: moment.unitOfTime.DurationConstructor;
}

export const HeaderTitle = ({ unit, unitTime }: IHeaderTitle ) => {
    
    const { ganttWidthRow } = useContext( GanttContext );

    const nDate = moment( unit );    

    const Y = nDate.format('YYYY');
    const M = nDate.format('MM');
    const D = nDate.format('DD');
    const H = nDate.format('HH');

    const style = {
        height: heightHeaderRow( unitTime ),
        width: widthHeaderRow(nDate.format('YYYY-MM-DD HH:mm:ss'), unitTime, ganttWidthRow )
    }

    switch( unitTime ){

        case 'hours':            
            return (<div className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >
                        <p> { H } Hs </p>  
                        <p>{ D +'-'+ M +'-'+ Y }</p>  
                    </div>);

        case 'days':
            return (<div className="gantt__content__header--unit"
                        style = {{ ...style }}
                    > 
                        <p>{ D +'-'+ M +'-'+ Y }</p>  
                    </div>);

        case 'weeks':

            const firstDayOfWeek = getFirstDayOfWeek( unit );
            
            const lastDayOfWeek = getLastDayOfWeek( unit );

            const init = firstDayOfWeek.format('DD-MM-YYYY');

            const end = lastDayOfWeek.format('DD-MM-YYYY');
            
            return (<div className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >
                        <p>From { init }</p>
                        <p>To { end }</p>
                    </div>);
            
        case 'months':
            return (<div className="gantt__content__header--unit"
                        style = {{ ...style }}
                    > <p>{ Y +'-'+ M }</p></div>);
            
        case 'years':
            return (<div className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >{  <p>{ Y }</p> }</div>);
        
        default:
            return (<div className="gantt__content__header--unit"
                        style = {{ ...style }}
                    >{ unit }</div>);
            
    }
}
