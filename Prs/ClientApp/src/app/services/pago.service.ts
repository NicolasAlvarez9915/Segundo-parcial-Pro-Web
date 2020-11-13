import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { tap, catchError } from 'rxjs/operators';
import { Pago } from '../Prs/models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  Buscar(codigo: string): Observable<Pago> {
    return this.http.get<Pago>(this.baseUrl+'api/Pago/'+ codigo)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Pago>('Buscar', null))
      );
  }

  registrar(pago: Pago): Observable<Pago> {
    
    alert(this.baseUrl+'api/Pago/'+ pago.codigo);
    return this.http.post<Pago>(this.baseUrl + 'api/Pago', pago)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Pago>('Registrar', null))
      );
  }
}
