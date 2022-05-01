import { useReducer } from "react";
import { IDimensionScreen } from "../interfaces";

type ActionReducer = {
    type: string;
    payload: number | string | null; 
}

const ACTIONS_REDUCERS = {
    SET_DESKTOP: 'set_desktop',
    SET_MOBILE: 'set_mobile',
    SET_ZOOM: 'set_zoom'
}



export const reducer = (state: IDimensionScreen, action: ActionReducer ): IDimensionScreen => {
    
    switch( action.type ){
       
        case ACTIONS_REDUCERS.SET_DESKTOP:
            return {
                ...state,
                ganttHeightRow: 23,
                ganttHeightTask:20,
            };

        case ACTIONS_REDUCERS.SET_MOBILE:
            return {
                ...state,
                ganttHeightRow: 50,
                ganttHeightTask: 47
            };

        case ACTIONS_REDUCERS.SET_ZOOM:
            return {
                ...state,
                ganttWidthRow: action.payload as number
            };
            
        default:
            return state;
    }

}

export const useDimension = ( initialState: IDimensionScreen ) => {

    const [ state, dispatch ] = useReducer( reducer, initialState );

    const { ganttHeightRow, ganttHeightTask, ganttWidthRow } = state;

    return {
        set_desktop: () => dispatch( { type: ACTIONS_REDUCERS.SET_DESKTOP, payload: null }),
        set_mobile: () => dispatch( { type: ACTIONS_REDUCERS.SET_MOBILE, payload: null  }),
        set_zoom: ( percent: number ) => dispatch( { type: ACTIONS_REDUCERS.SET_ZOOM, payload: percent  }),
        ganttHeightRow,
        ganttHeightTask,
        ganttWidthRow
    }

}