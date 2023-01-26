import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListapacientesI } from '../../modelos/listapacientes.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

pacientes:ListapacientesI[] | undefined;

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
this.api.getAllcients().subscribe(data => {
  this.pacientes=data
  
})
}


editarPaciente(id: any){
  this.router.navigate(['editar', id])

  }

  nuevoPaciente(){
    this.router.navigate(['nuevo'])
  }



}

