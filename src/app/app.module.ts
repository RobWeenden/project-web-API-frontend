import { UsuarioReportComponent } from './components/usuario/usuario-report/usuario-report.component';
import { ModalModule } from './modal.module'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { HttpInterceptorModule } from './services/header-interceptor.service';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { GuardRotasGuard } from './services/guard-rotas.guard';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';


export const appRouters: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent, canActivate: [GuardRotasGuard] },
	{ path: '', component: LoginComponent },


	{ path: 'usuario/lista', component: UsuarioListComponent, canActivate: [GuardRotasGuard] },
	{ path: 'usuario/novo', component: UsuarioFormComponent, canActivate: [GuardRotasGuard] },
	{ path: 'usuario/editar/:id', component: UsuarioFormComponent, canActivate: [GuardRotasGuard] },

  { path: 'usuario/relatorio', component: UsuarioReportComponent, canActivate: [GuardRotasGuard] },
  { path: 'usuario/grafico', component: BarChartComponent, canActivate: [GuardRotasGuard] },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);
export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
		LoginComponent,
		UsuarioListComponent,
		UsuarioFormComponent,
    UsuarioReportComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
		HttpClientModule,
		routes,
		HttpInterceptorModule,
		NgxMaskModule.forRoot(optionsMask),
		NgxPaginationModule,
    NgxCurrencyModule,
    ModalModule,
    BrowserAnimationsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
