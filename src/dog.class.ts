import { Animal } from "./classes/animal.interface"

export class Dog implements Animal {
    constructor(public name: string, public weight: number) {

    }
}

