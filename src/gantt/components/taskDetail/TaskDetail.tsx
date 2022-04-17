import { useContext } from 'react';
import { GanttContext } from '../../context/GanttContext';
import './styles.css';

export const TaskDetail = () => {

    const { taskDetail, setTaskDetail } = useContext( GanttContext );
    
    const {
        display,
        left,
        top,
        task
    } = taskDetail;

    const bodyFields = Object.entries( task.body );    

    const widthScreen = window.innerWidth;

    const widthPercent = Math.ceil( widthScreen * 0.6 );

    const halfWidthPercent = Math.ceil( widthPercent / 2 );
    
    const parsedLeft = parseInt( left.replace('px','') );

    let nleft = left;
    
    if( parsedLeft >=  halfWidthPercent ){

        const newLeft = parsedLeft - ( parsedLeft - halfWidthPercent );

        nleft = newLeft + 'px';

    }


    const style = {
        display,
        left: nleft,
        top
    }

    const handleClickCloseDetail = () =>{

        setTaskDetail({
            left:'0px',
            top:'0px',
            display:'none',
            task:{
                taskId:0,
                color: "",
                startTime: "",
                endTime:   "",
                body:{},
            }
        })

    } 

    return  (
        <div 
            className="gant__task-detail"
            style={{ ...style }}
        >
            <div className="gant__task-detail--header">
                <h5 className="gant__task-detail__header--title">Task ID: { taskDetail.task.taskId }</h5>
                <span 
                    className='gant__task-detail__header--close-detail'
                    onClick={ handleClickCloseDetail }
                >&times;</span>
            </div>
            <div className="gant__task-detail--body">
                {
                    bodyFields.map( ( fields, i ) => {
                        return (
                            <p key = { i }>
                                <span className='gant__task-detail__body--key'>{ fields[0] }:</span> 
                                <span className='gant__task-detail__body--value'>{ fields[1] as string }</span>
                            </p>    
                        )
                    })
                }
            </div>
        </div>
    );

}
