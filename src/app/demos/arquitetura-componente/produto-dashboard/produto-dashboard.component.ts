import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../models/Produto';


@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit,AfterViewInit {

  produtos:Produto[];

  @ViewChild('teste',{ static: false}) 
  mensagemTela: ElementRef;

  constructor(private route : ActivatedRoute) { }
  ngAfterViewInit(): void {
    let clickTexto : Observable<any> = fromEvent(this.mensagemTela.nativeElement,'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto');
      return; // pra não entrar em loop
    } )
  }

  ngOnInit(): void {
    this.produtos = this.route.snapshot.data['produtos'];
   console.log(this.route.snapshot.data['teste']);
  }

  mudarStatus(event : Produto){
    event.ativo = !event.ativo;
  }

}
