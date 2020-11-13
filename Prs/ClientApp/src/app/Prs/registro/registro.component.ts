import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { TerceroService } from 'src/app/services/tercero.service';
import { Tercero } from '../models/tercero';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  identificacionBuscar: string;
  formularioRegistroTercero: FormGroup;
  tercero: Tercero;
  constructor(
    private terceroService: TerceroService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.tercero = new Tercero();
    this.tercero.ciudad = '';
    this.tercero.departamento = '';
    this.tercero.direccion = '';
    this.tercero.id = this.identificacionBuscar;
    this.tercero.nombre = '';
    this.tercero.pais = '';
    this.tercero.telefono = '';
    this.tercero.tipoId = '';

    this.formularioRegistroTercero = this.formBuilder.group({
      ciudad: [this.tercero.ciudad, Validators.required],
      departamento: [this.tercero.departamento, Validators.required],
      direccion: [this.tercero.departamento, Validators.required],
      id: [this.tercero.id, Validators.required],
      nombre: [this.tercero.nombre, Validators.required],
      pais: [this.tercero.pais, Validators.required],
      telefono: [this.tercero.telefono, Validators.required],
      tipoId: [this.tercero.tipoId, Validators.required]
    });
  }

  get control() {
    return this.formularioRegistroTercero.controls;
  }

  onSubmit() {
    if (this.formularioRegistroTercero.invalid) {
      return;
    }
    //this.Registrar();
  }



  buscar() {
    this.terceroService.Buscar(this.identificacionBuscar).subscribe(
      r => {
        if (r != null) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona  registrada';

        } else {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona No registrada, debe proceder a registrarla';
          document.getElementById("RegistroTercero").classList.add("Mostar");
          document.getElementById("RegistroTercero").classList.remove("Ocultar");
        }
      }
    )
  }

}
