import { Animal } from "./animal.interface"

export class Dog implements Animal {
    constructor(public name: string, public weight: number) {

    }
}

