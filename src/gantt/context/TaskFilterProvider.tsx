import { useFilter } from '../hooks/useFilter';
import { Filter } from '../types';
import { TaskFilterContext } from './TaskFilterContext';

interface Props{
    children: JSX.Element | JSX.Element[];
}

const initialFilter: Filter = {
	key: null,
	value: null
}

export const TaskFilterProvider = ({ children }: Props) => {

    const { filters, setKey, setValue } = useFilter( initialFilter );

    return (
        <TaskFilterContext.Provider value = {  { filters, setKey, setValue } }>
            { children }
        </TaskFilterContext.Provider>
  )
}
