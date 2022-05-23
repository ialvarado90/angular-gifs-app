import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  get resultados() {
    return this.gifsService.resultados;
  }
  constructor(private gifsService: GifsService) {

  }

}
