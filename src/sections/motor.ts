import { Section } from "../section.model";




export class motor extends Section{
   
    private oilLevel: number;
    private fuelLevel: number;
    private temperature: number;

    constructor(name, priority){
        super(name, priority);
        this.startSensors();

    }
    private startSensors(){
        this.oilLevel = 100;
        this.fuelLevel = 0;
        this.temperature = 30;
    }


    


}