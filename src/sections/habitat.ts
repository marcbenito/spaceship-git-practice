import { randn_bm } from "../random-sensor";
import { Section } from "../section.model";


class  Room {
    name: string;
    people: number;
    temperature: number;
    constructor(fields?){
        if (fields) {
            this.name  = fields.name;
            this.people =fields.people;
            this.temperature = fields.temperature;
        }
    }
}
export class habitat extends Section {

    private rooms: Room[]=[];

    constructor(name, priority, totalRooms) {
        super(name, priority);

        this.startRooms(totalRooms);

    }
    private startRooms(total:number) {
      
        for (var x = 0; x < total; x++){
            this.rooms.push(new Room({name:`Room ${x}`, people: (Math.random()*10)+1, temperature:30}))
        }
        
    }

    public updateData(){
        
        this.rooms.forEach(room=>room.temperature = 30-(randn_bm()*60))
        
    }
}