import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm = new FormGroup({
  usuario: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
})

  constructor(private api:ApiService, private router:Router) { }


  ngOnInit(): void {
  }
 
  onLogin(form: any){
    this.api.loginByEmail(form).subscribe(data => {
      console.log(data)
     
    },
    
    );
  }


}
