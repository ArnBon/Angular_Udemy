import { Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';
import { debounceTime, Subject } from "rxjs";


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
 
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      //console.log('debouncer:', valor); en vez de console.log usamos:
      this.onDebounce.emit(valor);
    });
  }

  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  /*video 112 debouncer*/
  debouncer: Subject<string> = new Subject();


  termino: string = "";

  buscar() {
    this.onEnter.emit(this.termino);
  }

  //teclaPresionada(event: any ){    
    // const valor = event.target.value;
    // console.log(this.termino);
    // console.log(this.termino); no se mando el evento 

    /*esta es otra forma de hacerlo*/
   
  //}

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }



}
