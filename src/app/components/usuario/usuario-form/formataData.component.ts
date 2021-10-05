import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class FormataData extends NgbDateParserFormatter{

  readonly DELIMITER = '/';


  parse(value: string): NgbDateStruct | null {
    if(value){
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct): string | null{
    return date ? validarFormatoData(date.day) + this.DELIMITER + validarFormatoData(date.month) + this.DELIMITER + date.year : '';
  }

  toModel(date: NgbDateStruct | null): string | null{

    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;

  }

}

function validarFormatoData(item) {
  if(item.toString !== '' && parseInt(item) <= 9){
    return '0' + item;
  }
  return item
}
