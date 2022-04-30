import { useReducer } from "react";
import { IDimensionScreen } from "../interfaces";

type ActionReducer = {
    type: string;
    payload:string | null; 
}

const ACTIONS_REDUCERS = {
    SET_DESKTOP: 'set_desktop',
    SET_MOBILE: 'set_mobile',
}



export const reducer = (state: IDimensionScreen, action: ActionReducer ): IDimensionScreen => {

    switch( action.type ){
       
        case ACTIONS_REDUCERS.SET_DESKTOP:
            return {
                ...state,
                ganttHeightRow: 23,
                ganttHeightTask:20
            };

        case ACTIONS_REDUCERS.SET_MOBILE:
            return {
                ...state,
                ganttHeightRow: 50,
                ganttHeightTask: 47
            };
            
        default:
            return state;
    }

}

export const useDimension = ( initialState: IDimensionScreen ) => {

    const [ state, dispatch ] = useReducer( reducer, initialState );

    const { ganttHeightRow, ganttHeightTask } = state;

    return {
        set_desktop: () => dispatch( { type: ACTIONS_REDUCERS.SET_DESKTOP, payload: null }),
        set_mobile: () => dispatch( { type: ACTIONS_REDUCERS.SET_MOBILE, payload: null  }),
        ganttHeightRow,
        ganttHeightTask
    }

}