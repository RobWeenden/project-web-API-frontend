import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

const baseUrl = `${AppConstants.baseUrl}`;
const basePath = `${AppConstants.baseUrlPath}`

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	constructor(
		private http: HttpClient
	) { }

	listAll(): Observable<any> {
		return this.http.get<any>(`${baseUrl}/listAll`);
	}

	delete(id: number): Observable<any> {
		return this.http.delete(`${baseUrl}/deletar/${id}`, { responseType: 'text' });
	}

	deletePhone(id: number): Observable<any> {
		return this.http.delete(`${baseUrl}/telefone/deletar/${id}`, { responseType: 'text' });
	}

	search(nome: string): Observable<any> {
		return this.http.get(`${baseUrl}/buscar/${nome}`);
	}

	searchUserByNameByPage(nome: string, page: number): Observable<any> {
		return this.http.get(`${baseUrl}/buscarPorNome/${nome}/page/${page}`);
	}

	searchUserByName(nome: string): Observable<any> {
		return this.http.get(`${baseUrl}/buscarPorNome/` + nome);
	}


	searchPage(pagina): Observable<any> {
		return this.http.get<any>(`${baseUrl}/page/${pagina}`);
	}

	read(id: number): Observable<any> {
		return this.http.get(`${baseUrl}/recuperar/${id}`);
	}

	create(usuario): Observable<any> {
		return this.http.post<any>(`${baseUrl}/cadastrar`, usuario);
	}

	update(usuario): Observable<any> {
		return this.http.put<any>(`${baseUrl}/atualizar`, usuario);
	}

	userAuthentication() {
		if (localStorage.getItem('token') !== null &&
			localStorage.getItem('token').toString().trim() !== null) {
			return true;
		} else {
			return false;
		}
	}

  getProfessionList(): Observable<any>{
    return this.http.get<any>(`${basePath}/profissao/v1/listAll`);
  }




}
