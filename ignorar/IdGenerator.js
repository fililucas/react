/* GENERADOR DE ID RANDOM, USANDO UUID */
import { v4 as Generator } from "uuid";

const idGenerator = () => {
    console.log(Generator());
}

export default idGenerator;

/* console.log(idGenerator()); */