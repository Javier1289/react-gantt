import moment from "moment";

const johnTasks =  [
	{        
        color: "#990d0a",
        resourceId:"John Doe",
        body:{
            "name": "Graiden Barrera",
            "address": "289-6230 Proin Avenue",
            "country": "New Zealand",
            "text": "consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque, consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan nequ consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan nequ",
        }
    },
    {
        color: "#f2bab0",
        resourceId:"John Doe",
        body:{
            "name": "Bree Greer",
            "address": "192-6200 Nec St.",
            "country": "Sweden",
            "text": "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit,",
        }
    },
    {        
        color: "#30d1a0",
        resourceId:"John Doe",
        body:{
            "name": "Lillian Ortiz",
            "address": "680-1211 Pede, Street",
            "country": "Spain",
            "text": "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
        }
    },
    {        
        color: "#e89171",
        resourceId:"John Doe",
        body:{
            "name": "Jonas O'Neill",
            "address": "467-2951 Mauris St.",
            "country": "Netherlands",
            "text": "ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
        }
    },
    {        
        color: "#59e0a1",
        resourceId:"John Doe",
        body:{
            "name": "Orson Delaney",
            "address": "P.O. Box 766, 4276 Ac Rd.",
            "country": "Poland",
            "text": "consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia",
        }
    },
    
]


const janeTasks = [
	{        
        color: "#743dff",
        resourceId:"Jane Doe",
        body:{
            "name": "Alana Burris",
            "address": "Ap #600-3912 Arcu. Avenue",
            "country": "China",
            "text": "a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo",
        }
    },
    {        
        color: "#6176ed",
        resourceId:"Jane Doe",
        body:{
            "name": "Brent Hunt",
            "address": "487-3423 Vitae Rd.",
            "country": "Sweden",
            "text": "Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit.",
        }
    },
    {        
        color: "#0a6a75",
        resourceId:"Jane Doe",
        body:{
            "name": "Macy Roth",
            "address": "P.O. Box 124, 9900 Pellentesque, Road",
            "country": "United Kingdom",
            "text": "arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
        }
    },
    {        
        color: "#a74ce8",
        resourceId:"Jane Doe",
        body:{
            "name": "Josiah Fleming",
            "address": "971-6063 Odio. St.",
            "country": "Indonesia",
            "text": "elementum, dui quis accumsan convallis, ante lectus convallis est, vitae",
        }
    },
    {        
        color: "#2d2a91",
        resourceId:"Jane Doe",
        body:{
            "name": "Mechelle Holder",
            "address": "687-4328 Pharetra, Street",
            "country": "Germany",
            "text": "elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.",
        }
    },
]


const markTasks = [
    {    
        color: "#9c71dd",
        resourceId:"Mark Bowen",
        body:{
            "name": "Malcolm Parker",
            "address": "496-6485 Ullamcorper. St.",
            "country": "Austria",
            "text": "elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu",
        }
    },
    {    
        color: "#ea72ea",
        resourceId:"Mark Bowen",
        body:{
            "name": "Kadeem Robertson",
            "address": "Ap #396-6596 Inceptos Rd.",
            "country": "India",
            "text": "Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam",
        }
    },
    {    
        color: "#cafca6",
        resourceId:"Mark Bowen",
        body:{
            "name": "Rajah Murphy",
            "address": "P.O. Box 702, 2638 Sit Rd.",
            "country": "Philippines",
            "text": "Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
        }
    },
    {    
        color: "#58e27f",
        resourceId:"Mark Bowen",
        body:{
            "name": "Rudyard Mccray",
            "address": "P.O. Box 127, 4824 Tellus. Rd.",
            "country": "Netherlands",
            "text": "dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu",
        }
    },
]

const giselaTasks = [
    {
        color: "#e0dd33",
        resourceId:"Gisela Finley",
        body:{
            "name": "Chava Mcfarland",
            "address": "5025 Ac Road",
            "country": "Belgium",
            "text": "tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
        }
    },
    {
        color: "#e2ed68",
        resourceId:"Gisela Finley",
        body:{
            "name": "Gisela Finley",
            "address": "230-2809 Eu Rd.",
            "country": "Mexico",
            "text": "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
        }
    },
    {
        color: "#dd40a6",
        resourceId:"Gisela Finley",
        body:{
            "name": "Caesar Phillips",
            "address": "231-8638 Ut Street",
            "country": "India",
            "text": "hendrerit neque. In ornare sagittis felis. Donec tempor, est ac",
        }
    },
    {
        color: "#cce2ff",
        resourceId:"Gisela Finley",
        body:{
            "name": "Nicholas Cleveland",
            "address": "Ap #931-4050 Sit Street",
            "country": "Indonesia",
            "text": "amet ultricies sem magna nec quam. Curabitur vel lectus. Cum",
        }
    },
]



const generateTasks = (startTime: any, range: number, separator:number, unit:any, tasks: any[]) => {

    let nTasks: any = [];

	let init = moment( startTime ).add( ( range / 2 ) * -1, unit );
		
    let end = moment( startTime ).add( range, unit );
	
	let i = 0;

	while( init <= end ){

		if( tasks[i] ){

            let start = init.format('YYYY-MM-DD HH:mm:ss');

            let end = init.add( separator, unit ).format('YYYY-MM-DD HH:mm:ss');
			
			let task = {
				...tasks[i],
				taskId: tasks[i].resourceId +' - '+ i,
				startTime: start,
				endTime:  end,
                body:{
                    ...tasks[i].body,
                    from: start,
                    to: end
                }
	
			}		
	
			nTasks = [ ...nTasks, task ]
			
			i++;
			
		}

		init = init.add( separator, unit );
	}

	return nTasks;

}



export const arrayTasks = () => {

	const date = new Date();

	const startTime = moment( date );  
	
	//Hours
    const hours = generateTasks(startTime, 24, 1, 'hours', johnTasks );
	
	//Days
    const days = generateTasks(startTime, 30, 1, 'days', janeTasks );

	//Weeks
    const weeks = generateTasks(startTime, 4, 1, 'weeks', markTasks );

	//Months
    const months = generateTasks(startTime, 12, 1, 'months', giselaTasks );

	//Years

	return [
		...hours,
		...days,
        ...weeks,
        ...months
	]

}

