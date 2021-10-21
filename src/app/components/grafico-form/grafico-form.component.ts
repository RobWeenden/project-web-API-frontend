import { UsuarioGrafico } from '../../models/usuario-grafico';
import { UsuarioService } from '../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ChartColor, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-grafico-form',
  templateUrl: './grafico-form.component.html',
  styleUrls: ['./grafico-form.component.css']
})
export class GraficoForm implements OnInit{

  grafico = new UsuarioGrafico();
  constructor(
    private usuarioService: UsuarioService,
  ){}

  ngOnInit(): void {
    this.currentGraphic();
  }

  barChartOptions: ChartOptions = {
    responsive: true,

  };
  barChartLabels: Label[];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Salário Usuario',

    }
];

  currentGraphic(){
    this.usuarioService.readGraphic()
    .subscribe(data =>{
      this.grafico = data;
      this.barChartLabels = this.grafico.nome.replace(/"/g, '').split(',');
      this.configChart();

    });
  }

  configChart(){
    var arraySalario = JSON.parse('['+this.grafico.salario+']');
    this.barChartData = [{
      data: arraySalario,
      label: 'Salário Usuario',
      backgroundColor: '#17A2BF',
      borderColor:'#0887a0',
      borderWidth: 2,
      hoverBackgroundColor: '#005b6d',
      hoverBorderColor:'#0887a0',

    }];
  }
}
