import { createContext } from 'react';
import { Filter } from '../types';

export type TaskFilterContextProps = {
    filters: Filter;
    setKey: ( key: string ) => void;
    setValue: ( value: string ) => void;

}

export const TaskFilterContext = createContext<TaskFilterContextProps>({} as TaskFilterContextProps);
