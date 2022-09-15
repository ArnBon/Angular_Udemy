import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute, 
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.PaisService.getPaisPorAlpha(id) ) ) //dentro de los paramentesis con pipe es donde se puede especificar cualquier cantidad de operadores que van a trabajar con el producto de este observable
      .subscribe(resp => {
        console.log(resp);
    });

    // this.activateRoute.params
    // .subscribe( ({id}) =>  {
    //   console.log(id);

    //   this.PaisService.getPaisPorAlpha(id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   });
    // }); VAMOS A RESUMIR ESTE CODIGO VIDEO 115 RxJs SwitchMap

  }

}
