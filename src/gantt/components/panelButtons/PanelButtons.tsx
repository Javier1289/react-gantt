import { useContext } from 'react'
import { GanttContext } from '../../context/GanttContext';


export const PanelButtons = ( ) => {

    const {
        set_hours,
        set_days,
        set_weeks,
        set_months,
        set_years,
        startTime
    } = useContext( GanttContext )

    

    return (
        <div className="gantt__config">
            <button 
                className="gantt__config--button"
                onClick = { () => set_hours( startTime ) }
            >
                HOURS
            </button>
            <button 
                className="gantt__config--button"
                onClick = { () => set_days( startTime ) }
            >
                DAYS
            </button>
            <button 
                className="gantt__config--button"
                onClick = { () => set_weeks( startTime ) }
            >
                WEEKS
            </button>
            <button 
                className="gantt__config--button"
                onClick = { () => set_months( startTime ) }
            >
                MONTHS
            </button>
            <button 
                className="gantt__config--button"
                onClick = { () => set_years( startTime ) }
            >
                YEARS
            </button>      
        </div>      
  )
}
