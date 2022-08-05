import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { GanttContext } from '../../context/GanttContext';
import './styles.css';

export const Zoom = () => {

    const { set_zoom, ganttWidthRow } = useContext( GanttContext );

    const handleChange = ( e: any ) =>{ 
        
        set_zoom( parseFloat( e.target.value ) );

    }

    return (
            <div className='gantt__zoom'>    
                
                <FontAwesomeIcon icon={faSearchPlus} />

                
                <input 
                    className='gantt__zoom--input'
                    type = "range" 
                    onChange = { ( e ) => handleChange( e ) }
                    min="0.8" 
                    max="10" 
                    step = "0.1"
                    value={ ganttWidthRow }
                />
            </div>
    )
}