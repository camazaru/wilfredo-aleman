import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from '../../servicios/alertas/alertas.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
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

  constructor(private api:ApiService, private router:Router, private alert: AlertasService) { }

  ngOnInit(): void {
   /*  let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token': token
    }) */
  }

postForm(form:any){
this.api.postPatient(form).subscribe(data => {
console.log(data)
})
}

salir(){
this.router.navigate(['dashboard'])
}


}
