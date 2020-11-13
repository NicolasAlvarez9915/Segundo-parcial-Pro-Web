import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PagoService } from 'src/app/services/pago.service';
import { Pago } from '../models/pago';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  filtro: string;
  pagos: Pago[];
  total: number;
  constructor(
    private pagoService: PagoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.pagoService.todos().subscribe(
      r => {
        this.pagos = r;
      }
    );
    this.total = 0;
  }

  totalizar(){
    this.total = 0;
    for (var i = 0; i < this.pagos.length; i++){
      if(this.pagos[i].tipo == this.filtro){
        this.total += this.pagos[i].valor;
      }
    }
  }

}
