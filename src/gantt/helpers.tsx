import moment from "moment";
import { ITask } from './interfaces';

export const getUnitsTimeInRange = ( startTime: any, range: number, unitTime: moment.unitOfTime.DurationConstructor ) => {
        
    let init = moment( startTime ).add( range * -1, unitTime );
    
    const end = moment( startTime ).add( range, unitTime );

    let units: any[] = [];    

    while( init.diff( end ) < 0 ){
        
        init = init.clone().add( 1, unitTime );   

        units = [
            ...units,
            init.format('YYYY-MM-DD HH:mm:ss')
        ];        
    
    }
    
    return units;    

}

export const formatFirstTime = ( endTime: any, unitTime: moment.unitOfTime.DurationConstructor ) => {
    
    endTime = moment( endTime );    

    const Y = endTime.format('YYYY');
    const M = endTime.format('MM');
    const D = endTime.format('DD');
    const H = endTime.format('HH');

    let formatDate = null;

    switch( unitTime ){

        case 'hours':
            formatDate = Y +'-'+ M +'-'+ D + ' '+ H + ':00:00';
            return moment( formatDate );

        case 'days':
            formatDate = Y +'-'+ M +'-'+ D + ' 00:00:00';
            return moment( formatDate );

        case 'weeks':
            const firstDateWeek = getFirstDayOfWeek( endTime.format('YYYY-MM-DD HH:mm:ss') ).format('YYYY-MM-DD');
            formatDate = firstDateWeek + ' 00:00:00';
            return moment( formatDate );
            
        case 'months':
            formatDate = Y +'-'+ M +'-01 00:00:00';
            return moment( formatDate );
            
        case 'years':            
            formatDate = Y +'-01-01 00:00:00';
            return moment( formatDate );
        
        default:
            return endTime;
            
    }

}

export const formatEndTime = ( endTime: any, unitTime: moment.unitOfTime.DurationConstructor ) => {
    
    endTime = moment( endTime );    

    const Y = endTime.format('YYYY');
    const M = endTime.format('MM');
    const D = endTime.format('DD');
    const H = endTime.format('HH');

    let formatDate = null;
    let lastDay = null;


    switch( unitTime ){

        case 'hours':
            formatDate = Y +'-'+ M +'-'+ D + ' '+ H + ':59:59';
            return moment( formatDate );

        case 'days':
            formatDate = Y +'-'+ M +'-'+ D + ' 23:59:59';
            return moment( formatDate );

        case 'weeks':
            const lastDateWeek = getLastDayOfWeek( endTime.format('YYYY-MM-DD HH:mm:ss') ).format('YYYY-MM-DD');        
            formatDate = lastDateWeek + ' 23:59:59';
            return moment( formatDate );
            
        case 'months':
            lastDay = getLastDayMonth( endTime.format('YYYY-MM-DD HH:mm:ss') );
            formatDate = Y +'-'+ M +'-'+ lastDay + ' 23:59:59';            
            return moment( formatDate );
            
        case 'years':
            lastDay = getLastDayMonth( endTime.format('YYYY-MM-DD HH:mm:ss') );
            formatDate = Y +'-'+ '12' +'-'+ lastDay + ' 23:59:59';
            return moment( formatDate );
        
        default:
            return endTime;
            
    }

}



const getLeapYear = ( year: number ) => {

	let leapYear = "28";
		
	if (((year % 4 === 0) && (year % 100 !== 0 )) || (year % 400 === 0)){
	
	    leapYear = "29";    
	
	}

	return leapYear;

}



const getLastDayMonth = ( date: string ) => {

    const newDate = moment( date );

    const Y = newDate.format('YYYY');

    const M = newDate.format('M');
    
	let leapYear = getLeapYear( parseInt( Y ) );

	let month = ["31",leapYear,"31","30","31","30","31","31","30","31","30","31"];	

	return month[ parseInt( M ) - 1 ];

}

export const getFirstDayOfWeek = ( date: string ) => {

    const newDate = moment( date );

    const diff = 1 - parseInt( newDate.format( 'd' ) );

    return newDate.add( diff, 'days' );

}

export const getLastDayOfWeek = ( date: string ) => {

    const newDate = moment( date );

    const diff = 7 - parseInt( newDate.format( 'd' ) );

    return newDate.add( diff, 'days' );

}

export const heightHeaderRow = ( unitTime: moment.unitOfTime.DurationConstructor ) => {
    
    switch( unitTime ){
        case 'hours':
            return '50px';

        case 'days':
            return '27px';

        case 'weeks':
            return '50px';
            
        case 'months':
            return '27px';
            
        case 'years':        
            return '27px';
        
        default:
            return '27px';
    }

}

export const widthHeaderRow = ( date: string, unitTime: moment.unitOfTime.DurationConstructor, percent: number ) => {
    
    const nDate = moment( date );

    const pixelDefault = 150;

    let unitDayPixel = 5;

    let width = 0;

    switch( unitTime ){
        case 'hours':
            return ( pixelDefault * percent ) + 'px';

        case 'days':
            return ( pixelDefault * percent ) + 'px';

        case 'weeks':
            return ( pixelDefault * percent ) + 'px';
            
        case 'months':

            const lastDayMonth = getLastDayMonth( date );            
        
            width = parseInt( lastDayMonth ) * ( unitDayPixel * percent );

            return width+'px';
            
        case 'years':

            unitDayPixel = 0.60;    
            
            let leapYear = getLeapYear( parseInt( nDate.format('Y') ) );
            
            let days = 337+parseInt(leapYear);
            
            width = days * ( unitDayPixel * percent );
            
            return ( ( days + parseInt( leapYear ) ) * percent ) + 'px';
        
        default:
            return ( pixelDefault * percent ) + 'px';
    }

}


export const getFilteredTasks = ( tasks:ITask[], key: string | null, value: string | number| null ) => {
        
    return tasks.filter( task => {
        
        if( key && value ){
            
            if( task.body[ key ] ){
                
                return task.body[ key ].toLowerCase().includes( value.toString().toLowerCase() );                                            
            
            }else{

                return false;

            }

        }else{

            return true;
        
        }

    }); 
}