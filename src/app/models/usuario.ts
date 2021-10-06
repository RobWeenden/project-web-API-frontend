import { Profissao } from './profissao';
import { Telefone } from './telefone';

export class Usuario {
	id: number;
	login: string;
	nome: string;
	cpf: string;
	senha: string;
	dataNascimento: string;
	telefones: Array<Telefone>;
  profissao: Profissao = new Profissao();

}
