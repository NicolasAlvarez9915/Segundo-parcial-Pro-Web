import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Tercero } from '../Prs/models/tercero';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TerceroService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  Buscar(identificacion: string): Observable<Tercero> {
    return this.http.get<Tercero>(this.baseUrl + 'api/Tercero/' + identificacion)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Tercero>('Buscar', null))
      );
  }

  registrar(tercero: Tercero): Observable<Tercero> {
    return this.http.post<Tercero>(this.baseUrl + 'api/Tercero', tercero)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Tercero>('Registrar', null))
      );
  }
}
