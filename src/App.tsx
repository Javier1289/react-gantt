import { Gantt } from './gantt/Gantt';
import { arrayTasks } from './data/tasks';
import { arrayResources } from './data/resources';
import { GanttProvider } from './gantt/context/GanttProvider';
import './index.css';


const App = () => {  
  
  	return (
		<div className="App">
			<header className="App-header" >
				React Gantt
				<hr/>  
			</header>
			<div>     
				<GanttProvider >
					<Gantt 
					resources = { arrayResources() } 
					tasks = { arrayTasks() } 
					/>        
				</GanttProvider>           
			</div>
		</div>
  	);

}

export default App;
