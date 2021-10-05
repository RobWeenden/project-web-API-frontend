import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario = { login: '', senha: '' };
	token = localStorage.getItem('token');

	constructor(
		private loginService: LoginServiceService,
		private router: Router,
	) { }

	public login() {
		this.loginService.login(this.usuario);
	}

	ngOnInit() {
		if (this.token != null &&
			this.token.toString().trim() != null) {

			this.router.navigate(['home']);

		}

	}

}
