import Gantt from './gantt/Gantt';
import { arrayTasks } from './data/tasks';
import { arrayResources } from './data/resources';


const App = () => {  
  
  	return (
		<div className="App">
			<header className="App-header" >
				React Gantt
				<hr/>  
			</header>
			<div>     
				
				<Gantt 
                    resources = { arrayResources() } 
                    tasks = { arrayTasks() } 
                    tableInfo = { true }
                    filters = { true }
                />          
				
			</div>
		</div>
  	);

}

export default App;
