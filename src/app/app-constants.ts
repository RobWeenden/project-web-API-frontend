import { environment } from './../environments/environment';
export class AppConstants {

  public static get baseServer(): string { return environment.API}
  public static get baseLogin(): string {return this.baseServer + 'api-curso/login'}
  public static get baseUrl(): string {return this.baseServer +  'api-curso/usuario/v1'}
  public static get baseUrlPath(): string {return this.baseServer + 'api-curso'}

  }
