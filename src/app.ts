import express, { json, Request, Response } from "express";
import { Dog } from "./model/dog.class";

import { dogWeightMessage } from "./messages";

const app = express();
app.use(json());

app.get("/", (request: Request, response: Response) => {
    return response.json({ message: "Hello, this is a REST API to you know about my dog. 😊 " });
});

app.get("/mydog", (request: Request, response: Response) => {
    const MyDog = new Dog("Cristal 🐶 ", 18.5);

    return response.json({ message: dogWeightMessage(MyDog) });
});

export default app;