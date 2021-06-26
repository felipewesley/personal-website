import { Pipe, PipeTransform } from '@angular/core';

interface TimeLabelModel {
  plural: string;
  singular: string;
}

@Pipe({
  name: 'untilToday'
})
export class UntilTodayPipe implements PipeTransform {

  private _second: TimeLabelModel = {
    plural: 'segundos',
    singular: 'segundo'
  };
  
  private _minute: TimeLabelModel = {
    plural: 'minutos',
    singular: 'minuto'
  };

  private _hour: TimeLabelModel = {
    plural: 'horas',
    singular: 'hora'
  };

  private _day: TimeLabelModel = {
    plural: 'dias',
    singular: 'dia'
  };

  private _month: TimeLabelModel = {
    plural: 'meses',
    singular: 'mês'
  };

  private _year: TimeLabelModel = {
    plural: 'anos',
    singular: 'ano'
  };

  transform(dataInicio: Date, dataFim: Date = new Date()): any {
    
    let str = new String();

    const inicioMilissegundos = dataInicio.getTime();
    const fimMilissegundos = dataFim.getTime();

    const diffMilissegundos = fimMilissegundos - inicioMilissegundos;

    let diffSegundos = Math.trunc(diffMilissegundos / 1000);
    let diffMinutos = Math.trunc(diffSegundos / 60);
    let diffHoras = Math.trunc(diffMinutos / 60);
    let diffDias = Math.trunc(diffHoras / 24);
    let diffMeses = Math.trunc(diffDias / 30);
    let diffAnos = Math.trunc(diffMeses / 12);

    if (diffAnos > 0)
      str = str.concat(this._createLabel(diffAnos, this._year, this._calcMissing(diffMeses, 12) > 0));

    if (this._calcMissing(diffMeses, 12) > 0 || diffMeses > 0) {

      if (diffAnos > 0) {

          str = str.concat(this._createLabel(this._calcMissing(diffMeses, 12), this._month));
      }
      else {

        str = str.concat(this._createLabel(diffMeses, this._month));
      }
    }

    if (str.length == 0)
      str = str.concat(`há pouco `);

    return str.toString().trim();
  }

  private _calcMissing = (timeRef: number, fator: number) => timeRef % fator;

  private _createLabel = (timeRef: number, model: TimeLabelModel, aditional?: boolean) => 
    `${timeRef} ${this._makeLabel(timeRef, model)} ${aditional ? "e " : ""}`;

  private _makeLabel = (timeRef: number, model: TimeLabelModel) => 
    timeRef == 1 ? model.singular : model.plural;

}
