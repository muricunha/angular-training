import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  public onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

  public onRemoveCurso(remCurso: string){
    this.cursosService.removeCurso(remCurso);
  }
}
