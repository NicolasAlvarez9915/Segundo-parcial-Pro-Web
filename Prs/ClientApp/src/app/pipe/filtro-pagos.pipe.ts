import { Pipe, PipeTransform } from '@angular/core';
import { Pago } from '../Prs/models/pago';

@Pipe({
  name: 'filtroPagos'
})
export class FiltroPagosPipe implements PipeTransform {

  transform(pagos: Pago[], filtro: string): any {
    if (filtro == null) return pagos;
     return pagos.filter(p=>
      p.tipo.toLowerCase()
      .indexOf(filtro.toLowerCase()) !== -1
    );
  }

}
