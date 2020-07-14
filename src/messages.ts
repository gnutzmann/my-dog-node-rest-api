import { Animal } from "./classes/animal.interface";

export function dogWeightMessage(animal: Animal) {
    return `Your dog ${animal.name} weighs ${animal.weight}kg.`
}