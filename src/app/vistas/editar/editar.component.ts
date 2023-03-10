import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from '../../servicios/alertas/alertas.service';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService, private alertas:AlertasService) { }

datosPaciente: any;

editarForm = new FormGroup({
nombre: new FormControl(''),
correo: new FormControl(''),
dni: new FormControl(''),
direccion: new FormControl(''),
codigostal: new FormControl(''),
genero: new FormControl(''),
telefono: new FormControl(''),
pacienteId: new FormControl(''),
fechaNacimiento: new FormControl(''),
})

  ngOnInit(): void {
let pacienteid = this.activerouter.snapshot.paramMap.get('id');
let token = this.getToken();

this.api.getSinglePacient(pacienteid).subscribe(data => {

this.datosPaciente = data[0];

this.editarForm.setValue({
  'nombre': this.datosPaciente.Nombre,
  'correo': this.datosPaciente.Correo,
  'dni': this.datosPaciente.DNI,
  'direccion': this.datosPaciente.Direccion,
  'codigostal': this.datosPaciente.CodigoPostal,
  'genero': this.datosPaciente.Genero,
  'telefono': this.datosPaciente.Telefono,
  'pacienteId': this.datosPaciente.PacienteId,
  'fechaNacimiento': this.datosPaciente.FechaNacimiento
})
})
  }


getToken(){
  return localStorage.getItem('token')
}

postForm(form:any){
  this.api.puttient(form).subscribe(data => {
let respuesta:any = data;
if(respuesta.status == "ok"){
  this.alertas.showSuccess('Datos modificados', 'Hecho')
}else{
  this.alertas.showError(respuesta.result.error_msg, 'Error' )
}

  })

}

eliminar(){
  
  this.api.delete(this.editarForm).subscribe(data => {
    let respuesta:any = data;
    if(respuesta.status == "ok"){
      this.alertas.showSuccess('ciente eliminado', 'Hecho');
      this.router.navigate(['dashboard'])
    }else{
      this.alertas.showError(respuesta.result.error_msg, 'Error' )
    }
  })
}

salir(){
  this.router.navigate(['dashboard'])
}

}
