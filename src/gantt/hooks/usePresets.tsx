import { useReducer } from "react";
import { Presets } from "../types";

type ActionReducer = {
    type: string;
    payload:string;
}

const ACTIONS_REDUCERS = {
    SET_HOURS: 'set_hours',
    SET_DAYS: 'set_days',
    SET_WEEKS: 'set_weeks',
    SET_MONTHS: 'set_months',
    SET_YEARS: 'set_years',
}

const reducer = (state: Presets, action: ActionReducer): Presets => {

    switch( action.type ){
        case ACTIONS_REDUCERS.SET_HOURS:
            return {
                startTime: action.payload,
                unitTime: 'hours',
                range: 24
            }

        case ACTIONS_REDUCERS.SET_DAYS:
            return{
                startTime: action.payload,
                unitTime: 'days',
                range: 30
            }   
        
        case ACTIONS_REDUCERS.SET_WEEKS:
            return{
                startTime: action.payload,
                unitTime: 'weeks',
                range: 4
            }
        
        case ACTIONS_REDUCERS.SET_MONTHS:
            return{
                startTime: action.payload,
                unitTime: 'months',
                range: 12
            }
        
        case ACTIONS_REDUCERS.SET_YEARS:
            return{
                startTime: action.payload,
                unitTime: 'years',
                range: 5
            }
            
        default:
            return state;
    }
}

export const usePresets = ( initialState: Presets ) => {

    const [ state, dispatch ] = useReducer( reducer, initialState );

    const { startTime, range , unitTime } = state;

    return {
        set_hours: ( date: string ) => dispatch( { type: ACTIONS_REDUCERS.SET_HOURS, payload: date }),
        set_days: ( date: string ) => dispatch( { type: ACTIONS_REDUCERS.SET_DAYS, payload: date }),
        set_weeks: ( date: string ) => dispatch( { type: ACTIONS_REDUCERS.SET_WEEKS, payload: date }),
        set_months: ( date: string ) => dispatch( { type: ACTIONS_REDUCERS.SET_MONTHS, payload: date }),
        set_years: ( date: string ) => dispatch( { type: ACTIONS_REDUCERS.SET_YEARS, payload: date }),        
        startTime, 
        range, 
        unitTime
    }

}