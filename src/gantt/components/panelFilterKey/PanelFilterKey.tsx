import { useContext } from 'react';
import { TaskFilterContext } from '../../context/TaskFilterContext';

interface Props{
	filterKeys: any[] 
}

export const PanelFilterKey = ( { filterKeys }: Props ) => {

	const { setKey, setValue } = useContext( TaskFilterContext );

	return (
		<div>
			<select 
				className="gantt_filter--keys"
				onChange = { ( e ) => setKey( e.target.value ) }
			> 
			<option value = { 0 } key = {0}>Select</option>
			{
				filterKeys.map( ( key, i )  => ( <option value = {key}  key = { i + 1 } >{ key }</option> ) )
			}          
			</select>
			<input 
				type="text" 
				className="gantt__filter--values" 
				onChange = { ( e ) => setValue( e.target.value ) }
			/>
		</div>
	)
}
