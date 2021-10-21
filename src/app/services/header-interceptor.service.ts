import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

	constructor() { }

	loadingError(error: HttpErrorResponse) {
		let errorMessage = 'Erro desconhecido';
		if (error.error instanceof ErrorEvent) {
			console.error(error.error);
			errorMessage = 'Error: ' + error.error.error;
		} else {
      if(error.status === 403){
        errorMessage = "Acesso negado: Faça o login novamente.";
      }else{
        errorMessage = 'Codigo: ' + error.error.code + '\nMensagem: ' + error.error.error;

      }
		}

		window.alert(errorMessage);
		return throwError(errorMessage);
	}


	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (localStorage.getItem('token') != null) {
			const token = 'Bearer ' + localStorage.getItem('token');
			const tokenRequest = req.clone({
				headers: req.headers.set('Authorization', token)
			});
			return next.handle(tokenRequest).pipe(
				tap((event: HttpEvent<any>) => {
					if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
						console.info('Sucesso na operacao');
					}
				}),
				catchError(this.loadingError));
		} else {
			return next.handle(req);
		}

	}
}

@NgModule({
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: HeaderInterceptorService,
		multi: true,
	},
	],
})

export class HttpInterceptorModule {

}
