import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario-list.component.html',
	styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

	usuarios: Array<Usuario[]>;
	nome: string;
	total: number;
	p: number;

	constructor(private usuarioService: UsuarioService
	) { }

	ngOnInit() {
		this.getListUsuarios();
	}

	getSearchUsuario() {
		if(this.nome !== ''){
		this.usuarioService.search(this.nome)
			.subscribe(
				data => {
					this.usuarios = data;
				});
			}else {
				this.usuarioService.listAll()
				.subscribe(data => {
					this.usuarios = data.content;
					this.total = data.totalElements;
				});
			}
	}

	getListUsuarios(): void {
		this.usuarioService.listAll()
			.subscribe(data => {
				this.usuarios = data.content;
				this.total = data.totalElements;
			});
	}

	getLoadingPage(pagina) {
		if (this.nome !== '') {
			this.usuarioService.searchUserByNameByPage(this.nome, (pagina - 1))
				.subscribe(
					data => {
						this.usuarios = data.content;
						this.total = data.totalElements;
					});
		} else if(this.nome == ''){
			this.usuarioService.searchPage(pagina - 1)
				.subscribe(
					data => {
						this.usuarios = data.content;
						this.total = data.totalElements;
					});
		}
	}

	getDeleteUsuario(id: number, index: number) {
		if (confirm('Deseja remover este Item?')) {
			this.usuarioService.delete(id)
				.subscribe(
					data => {
						this.usuarios.splice(index, 1);

					});
		}
	}

  getPrintReport(){
    return this.usuarioService.getDownloadPdfReport();
  }

	// getSearchUsuarioNew() {
	// 	if (this.nome === '') {
	// 	//	this.getListUsuarios();
	// 		this.usuarioService.listAll()
	// 		.subscribe(data => {
	// 			this.usuarios = data.content;
	// 			this.total = data.totalElements;
	// 		});
	// 	} else {
	// 		this.usuarioService.searchUserByName(this.nome)
	// 			.subscribe(
	// 				data => {
	// 					this.usuarios = data.content;
	// 					this.total = data.totalElements;
	// 				});

	// 	}
	// }

	// getListPageUsuarios(pagina) {
	// 	this.usuarioService.searchPage(pagina - 1)
	// 		.subscribe(data => {
	// 			this.usuarios = data.content;
	// 			this.total = data.totalElements;
	// 		});
	// }

	// getLoadingPage(pagina) {
	// 	this.getLoadingPageNew(pagina);
	// 	this.getListPageUsuarios(pagina);
	// }

}

