import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})

export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService:ProdutoService) { }

  public produtos:Produto[];
  ngOnInit(): void {
    this.produtoService.obterprodutos().subscribe(prod => {
      this.produtos = prod;
      console.log(prod);
    },
    error => console.log(error)
    ) 
  }

}
