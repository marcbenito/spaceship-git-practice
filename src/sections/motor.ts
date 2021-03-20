import { randn_bm } from "../random-sensor";
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
        this.fuelLevel = 100;
        this.temperature = 30;
    }

    public updateData(){
        
        this.oilLevel = randn_bm()*100
        this.fuelLevel = this.fuelLevel - randn_bm()* 10
        this.temperature = randn_bm()*200
    }



    


}