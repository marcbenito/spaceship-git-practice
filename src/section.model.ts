

export abstract class  Section {

    name:string;
    priority: number;
    constructor(name, priority){
        console.log(`Starting ${name} with priority ${priority}`);
        this.name = name;
        this.priority = priority;
    }
    abstract updateData();
    
}