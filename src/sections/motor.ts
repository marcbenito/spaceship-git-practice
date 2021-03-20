import { Section } from "../section.model";




export class motor extends Section {

    private oilLevel: number;
    private fuelLevel: number;
    private temperature: number;

    constructor(name, priority) {
        super(name, priority);
        this.startSensors();

    }
    private startSensors() {
        this.oilLevel = 100;
        this.fuelLevel = 0;
        this.temperature = 30;
    }

    public status(){
        let status = ''
        if(this.oilLevel<10){
            status += 'OIL LEVEL PROBLEM'
        }
        if(this.fuelLevel<10){
            status += 'FUEL LEVEL PROBLEM'
        }
        if(this.temperature>100){
            status += 'TEMPERATURE PROBLEM'
        }
        if(status ===''){
            status = 'ALL OK';
        }
        return status;
    }
}