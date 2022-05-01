import { PanelButtons } from "../panelButtons/PanelButtons"
import { PanelFilterKey } from '../panelFilterKey/PanelFilterKey';
import './styles.css';
import { Zoom } from '../zoom/Zoom';

interface Props{
  filterKeys: any[] 
}

export const Filters = ( { filterKeys }: Props) => {
  return (
    
    <div className="gantt__filters">
        <PanelFilterKey 
          filterKeys = { filterKeys }
        />

        <Zoom />

        <PanelButtons />
    </div>
    
  )
}
