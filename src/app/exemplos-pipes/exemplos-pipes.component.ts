import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


  livro: any = {
    titulo: 'Harry Potter',
    raiting: '4.453',
    numeroPaginas: '853',
    preco: '29.99',
    dataLancamento: new Date(2016, 5, 23),
    url: 'www.amazon.com',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
