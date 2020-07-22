import { Animal } from "./model/animal.interface";

export function dogWeightMessage(animal: Animal) {
    return `My dog ${animal.name} weighs ${animal.weight}kg.`
}