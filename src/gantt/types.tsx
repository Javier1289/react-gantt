export type Presets = {
    startTime:   string;
    unitTime: moment.unitOfTime.DurationConstructor 
    range: number;     
}

export type Filter =  {
	key:string | null ;
	value:string | number | null ;
}
