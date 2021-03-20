import { habitat } from "./sections/habitat";
import { motor } from "./sections/motor";

console.log('demo');



let shipParts = [

    new motor('MOTOR Curvatura', 5),
    new motor('MOTOR 1', 5),
    new motor('MOTOR 2', 5),
    new motor('MOTOR 3', 5),
    new motor('MOTOR 4', 5),
    new habitat('Habitat A', 3, 100),
    new habitat('Habitat B', 3, 100),
    new habitat('Habitat Oficiales', 4, 10)
];
 

