import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { group } from 'console';
import { format } from 'path';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    name: new FormControl('',Validators.required),
    password :new FormControl('',Validators.required)
  })
  
 constructor(){}
 ngOnInit(): void {
   
 }
 onLogin(form: FormGroup) {
    console.log(form.value); // Access form values here
  }
}


