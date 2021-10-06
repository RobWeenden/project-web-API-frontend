import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';


const basePath = `${AppConstants.baseUrlPath}`

@Injectable({
	providedIn: 'root'
})
export class LoginServiceService {

	constructor(
		private http: HttpClient,
		private router: Router

	) { }


	login(usuario) {

		return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

			let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
			localStorage.setItem('token', token);

			console.info('Token: ' + localStorage.getItem('token'));

			this.router.navigate(['home']);

		},

			error => {
				console.error('Erro ao realizar Login');
			});
	}

	reset(login) {
    let user = new Usuario();
    user.login = login;

		return this.http.post(`${basePath}/recuperar/v1/reset`, user).subscribe(data => {

      alert(JSON.parse(JSON.stringify(data)).error);

		},

			error => {
				console.error('Erro ao recuperar Login');
        alert("Usuario não encontrado")
			});
	}
}
