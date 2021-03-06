import { FormataDataAdapter } from './formataDataAdapter.component';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormataData } from './formataData.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Telefone } from 'src/app/models/telefone';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Profissao } from 'src/app/models/profissao';

@Component({
	selector: 'app-root',
	templateUrl: './usuario-form.component.html',
	styleUrls: ['./usuario-form.component.css'],
  providers:[{provide: NgbDateParserFormatter, useClass: FormataData}, {provide: NgbDateAdapter, useClass: FormataDataAdapter}]
})
export class UsuarioFormComponent implements OnInit {

	idUsuario = null;
	loading = null;
	usuario = new Usuario();
	telefone = new Telefone();
  profissoes: Array<Profissao[]>;

	constructor(
		private routeActive: ActivatedRoute,
		private usuarioService: UsuarioService,
		private router: Router
	) { }

	ngOnInit() {
		this.idUsuario = this.routeActive.snapshot.paramMap.get('id');
    this.getReadProfissao();
		if (this.idUsuario != null) {
			this.getReadUsuario(this.idUsuario);
		}
	}

  getReadProfissao(){
    this.usuarioService.getProfessionList()
    .subscribe(data =>{
      console.log(data)
      this.profissoes = data;
    });
  }

	getReadUsuario(id: any) {
		this.usuarioService.read(id).subscribe(data => {
      console.log(data)
			this.usuario = data;
		});
	}

	getSaveUsuario() {
		if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
			this.usuarioService.update(this.usuario)
				.subscribe(data => {
          console.log(data)
				});
		} else {
			this.usuarioService.create(this.usuario)
				.subscribe(data => {
					this.router.navigateByUrl('/usuario/lista');
				});
		}
	}

	getNewUsuario() {
		this.usuario = new Usuario();
		this.getNewTelefone();
	}
	getNewTelefone() {
		this.usuario.telefones = new Array<Telefone>();
	}
	getInstaceNewTelefone() {
		this.telefone = new Telefone();
	}

	getSavePhone() {
		if (this.usuario.telefones === undefined) {
			this.getNewTelefone();
		}
		this.usuario.telefones.push(this.telefone);
		this.getInstaceNewTelefone();
	}
	getDeletePhone(id, i) {
		if (id == null) {
			this.usuario.telefones.splice(i, 1);
			return;
		}
		if (id != null && confirm('Deseja remover este numero?')) {
			this.usuarioService.deletePhone(id)
				.subscribe(data => {
					this.usuario.telefones.splice(i, 1);
				});
		}
	}

}
