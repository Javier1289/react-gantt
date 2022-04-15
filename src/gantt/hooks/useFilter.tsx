import { useState } from "react";
import { Filter } from "../types";


export const useFilter = ( initialState: Filter ) => {

    const [ filters, setFilters ] = useState( initialState );

    const setKey = ( key: string ) => {

		setFilters( {
			...filters,
			key 
		})

	}

	const setValue = ( value: string ) => {

		setFilters( {
			...filters,
			value
		})

	}

    return {
        filters,
        setKey: ( key: string ) => setKey( key ) ,
        setValue: ( value: string ) => setValue( value )
    }
}