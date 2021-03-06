import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'curso-angular-rest';

  constructor(
		private router: Router,
	) { }

	ngOnInit(): void {

		if (localStorage.getItem('token') == null) {
			this.router.navigate(['login']);
		}

	}
	public sair() {
		localStorage.clear();
		this.router.navigate(['login']);
	}

	public closeNavBar() {

		if (localStorage.getItem('token') !== null &&
			localStorage.getItem('token').toString().trim() !== null) {
			return false;
		} else {
			return true;
		}

	}


}
