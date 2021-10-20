import { Injectable } from "@angular/core";
import { NgbDateAdapter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class FormataDataAdapter extends NgbDateAdapter<string>{

  readonly DELIMITER = '/';
  fromModel(value: string | null): NgbDateStruct | null{
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
  toModel(date: NgbDateStruct | null): string | null{

    return date ? validarFormatoData(date.day) + this.DELIMITER + validarFormatoData(date.month) + this.DELIMITER + date.year : null;

  }

}
function validarFormatoData(item) {
  if(item.toString !== '' && parseInt(item) <= 9){
    return '0' + item;
  }
  return item
}
