import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `


  ]
})
export class PorPaisComponent  {

  

  termino : string = "";
  hayError: boolean = false; 
  paises  : Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  //se inyecta el servicio
  constructor(private paisService: PaisService) { }

 buscar(termino:string){
   
  this.mostrarSugerencias = false;
  this.hayError = false;
  this.termino = termino; // este es el termino que viene del input
  
  //console.log(this.termino);

  this.paisService.buscarPais(this.termino)
  .subscribe(paises => {
    console.log(paises);
    this.paises = paises;

  }, (err) => {
    this.hayError = true;
    this.paises = [];
  });
 }
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    //video 128
    this.paisService.buscarPais(termino)

    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
        );      
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    
  }


}