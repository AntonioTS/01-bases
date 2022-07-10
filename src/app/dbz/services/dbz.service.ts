import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];
    
    nuevo: Personaje = {
        nombre: 'Maestro Roshi',
        poder: 2000
    }
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }


    constructor() {}
    
    agregarPersonaje(argumento: Personaje) {
        this._personajes.push(argumento);
    }
}