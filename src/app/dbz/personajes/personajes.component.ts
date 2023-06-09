import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../Services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  get personajes(){
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService){}

}
