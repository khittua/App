import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  RegisterForm: FormGroup;
  usuario: string = ''; 
  contrasena: string = ''; 
  password: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.RegisterForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  submit() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (
        this.usuario === userData.usuario &&
        this.password === userData.password
      ) {
        this.router.navigate(['/qr']);
      } else {
        // Datos de inicio de sesión incorrectos
      }
    } else {
      // Usuario no registrado
    }
  }
  register() {
    this.router.navigate(['/home']);
  }
  recover(){
    this.router.navigate(['/recover']);
  }
  
  ngOnInit() {
  }

}
