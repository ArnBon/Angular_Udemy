import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

   pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(       
        switchMap( ( {id}) => this.paisService.getPaisPorAlpha( id ) ),
        tap( console.log )    //imprime el valor del observable    
        ) 
      .subscribe(pais => this.pais = pais);
      console.log("cargando país");
      console.log(this.pais);

    // this.activatedRoute.params
    // .subscribe( ({id}) =>  {
    //   console.log(id);

    //   this.PaisService.getPaisPorAlpha(id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   });
    // }); VAMOS A RESUMIR ESTE CODIGO VIDEO 115 RxJs SwitchMap

  }
  /*dentro de los paramentesis con pipe es donde se puede especificar cualquier
         cantidad de operadores que van a trabajar con el producto de este observable*/
}
