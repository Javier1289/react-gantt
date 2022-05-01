import { useContext } from 'react';
import { GanttContext } from '../../context/GanttContext';

export const Zoom = () => {

    const { set_zoom, ganttWidthRow } = useContext( GanttContext );

    const handleChange = ( e: any ) =>{ 
        
        set_zoom( parseFloat( e.target.value ) );

    }

    return (
            <div>                
                <input 
                    type = "range" 
                    onChange = { ( e ) => handleChange( e ) }
                    min="1" 
                    max="10" 
                    step = "0.1"
                    value={ ganttWidthRow }
                />
            </div>
    )
}