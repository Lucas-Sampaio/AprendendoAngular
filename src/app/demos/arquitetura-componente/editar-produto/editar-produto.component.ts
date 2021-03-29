import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ]
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;
  constructor(private route:ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.produto = this.produtoService.obterPorId(params['id']);
    })
  }

}
