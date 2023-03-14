import { Component } from '@angular/core';
import { Personaje } from "../interfaces/dbz.interfaces";
import { DbzService } from '../Services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



  nuevo: Personaje = {
    nombre: 'Adrian',
    poder: 1000
  }


}
