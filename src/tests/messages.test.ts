import { expect } from "chai";
import { Dog } from "../classes/dog.class";
import { dogWeightMessage } from "../messages";


describe('messages', function () {
    it('dogWeightMessage', function () {
        const MyDog = new Dog("DogTest", 12.3);
        let result = dogWeightMessage(MyDog);
        expect(result).equal("My dog DogTest weighs 12.3kg.");
    });
});