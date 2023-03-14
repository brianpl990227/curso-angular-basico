import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Brian',
            poder: 10000
        },
        {
            nombre: 'Adrian',
            poder: 10000
        }
    ]

    get personajes()
    {
        return [...this._personajes]
    }

    constructor() {
        
    }

    agregarPersonaje(personaje: Personaje)
    {
        this._personajes.push(personaje)
    }



}