import { PanelButtons } from "../panelButtons/PanelButtons"
import { PanelFilterKey } from '../panelFilterKey/PanelFilterKey';
import './styles.css';

interface Props{
  filterKeys: any[] 
}

export const Filters = ( { filterKeys }: Props) => {
  return (
    
    <div className="gantt__filters">
        <PanelFilterKey 
          filterKeys = { filterKeys }
        />
        <PanelButtons />
    </div>
    
  )
}
