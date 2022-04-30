import { Container } from './components/container/Container';
import { GanttProvider } from './context/GanttProvider';
import { TaskFilterProvider } from './context/TaskFilterProvider';
import { IGanttConfig } from './interfaces';
import './styles.css';

const Gantt = ( { resources, tasks, tableInfo = false, filters = false }: IGanttConfig ) => {  
  
  	return (		
		<GanttProvider >
			<TaskFilterProvider>
				<Container 
					resources = { resources } 
					tasks = { tasks } 
					tableInfo = { tableInfo }
					filters = { filters }
				/>        
			</TaskFilterProvider>
		</GanttProvider>           
  	);

}

export default Gantt;
