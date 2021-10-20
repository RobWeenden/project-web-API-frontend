import { UsuarioReport } from './../../../models/usuario-report';
import { FormataDataAdapter } from './formataDataAdapter.component';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormataData } from './formataData.component';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario';

@Component({
	selector: 'app-root',
	templateUrl: './usuario-report.component.html',
	styleUrls: ['./usuario-report.component.css'],
  providers:[{provide: NgbDateParserFormatter, useClass: FormataData}, {provide: NgbDateAdapter, useClass: FormataDataAdapter}]
})
export class UsuarioReportComponent {

  usuarioReport = new UsuarioReport();
  usuario = new Usuario();

	constructor(
		private routeActive: ActivatedRoute,
		private usuarioService: UsuarioService,
		private router: Router
	) { }

  printReport(){
    this.usuarioService.postDownloadPdfReportParam(this.usuarioReport);
  }


}
