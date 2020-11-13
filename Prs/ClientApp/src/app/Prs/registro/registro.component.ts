import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PagoService } from 'src/app/services/pago.service';
import { TerceroService } from 'src/app/services/tercero.service';
import { Pago } from '../models/pago';
import { Tercero } from '../models/tercero';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  identificacionBuscar: string;
  formularioRegistroTercero: FormGroup;
  formularioRegistroPago: FormGroup;
  tercero: Tercero;
  pago: Pago;
  constructor(
    private terceroService: TerceroService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private pagoService: PagoService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.buildFormPago();
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

  private buildFormPago() {
    this.pago = new Pago();
    this.pago.codigo = '';
    this.pago.fecha = new Date();
    this.pago.idTercero = '';
    this.pago.iva = 0;
    this.pago.tipo = '';
    this.pago.valor = 0;

    this.formularioRegistroPago = this.formBuilder.group({
      codigo: [this.pago.codigo, Validators.required],
      fecha: [this.pago.fecha, Validators.required],
      idTercero: [this.pago.idTercero, Validators.required],
      iva: [this.pago.iva, Validators.required],
      tipo: [this.pago.tipo, Validators.required],
      valor: [this.pago.valor, Validators.required]
    });
  }

  get control() {
    return this.formularioRegistroTercero.controls;
  }
  get controlPago() {
    return this.formularioRegistroPago.controls;
  }

  onSubmit() {
    if (this.formularioRegistroTercero.invalid) {
      return;
    }
    this.registrar();
  }

  onSubmitPago() {
    if (this.formularioRegistroPago.invalid) {
      return;
    }
    this.registrarPago();
  }

  registrarPago() {
    this.pago = this.formularioRegistroPago.value;
    this.pagoService.Buscar(this.pago.codigo).subscribe(r => {
      if (r == null) {
        this.pagoService.registrar(this.pago).subscribe(r => {
          if (r != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'Pago  registrado correctamente';
          }
        });
      }else{
        const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'Ya existe un pago con este codigo';
      }
    });
  }
  registrar() {
    this.tercero = this.formularioRegistroTercero.value;
    this.terceroService.registrar(this.tercero).subscribe(r => {
      if (r != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona  registrada correctamente';
        document.getElementById("RegistroTercero").classList.add("Ocultar");
        document.getElementById("RegistroTercero").classList.remove("Mostrar");
        document.getElementById("RegistroPago").classList.add("Mostrar");
        document.getElementById("RegistroPago").classList.remove("Ocultar");
      }
    });
  }

  buscar() {
    this.terceroService.Buscar(this.identificacionBuscar).subscribe(
      r => {
        if (r != null) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona  registrada, debe proceder a registrar los pagos';
          document.getElementById("RegistroTercero").classList.add("Ocultar");
          document.getElementById("RegistroTercero").classList.remove("Mostrar");
          document.getElementById("RegistroPago").classList.add("Mostrar");
          document.getElementById("RegistroPago").classList.remove("Ocultar");

        } else {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona No registrada, debe proceder a registrarla';
          document.getElementById("RegistroTercero").classList.add("Mostar");
          document.getElementById("RegistroTercero").classList.remove("Ocultar");
          document.getElementById("RegistroPago").classList.add("Ocultar");
          document.getElementById("RegistroPago").classList.remove("Mostrar");
        }
      }
    )
  }

}
