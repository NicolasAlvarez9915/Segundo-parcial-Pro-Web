import { Component, OnInit } from '@angular/core';
import { TerceroService } from 'src/app/services/tercero.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  identificacionBuscar: string;

  constructor(
    private terceroService: TerceroService,
    //private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  buscar() {
    alert("Aqui");
    this.terceroService.Buscar(this.identificacionBuscar).subscribe(
      r => {
        if (r != null) {
          /*const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona No registrada!!! :-)';*/

        } else {
          /*const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona  registrada!!! :-)';*/
        }
      }
    )
  }

}
