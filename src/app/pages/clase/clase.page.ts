import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  datosClase: string = '';
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  timestampCarga: number = Date.now();
  
  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0'); // Asegura 2 dígitos
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Asegura 2 dígitos
    return `${hours}:${minutes}`;
  }
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.datosClase = params['datosClase'];
      const userDataString = localStorage.getItem('userData');

      if (userDataString) {
        // Parsear userData si no es null
        const userData = JSON.parse(userDataString);

        // Asignar los valores del objeto userData a las variables
        this.nombre = userData.nombre;
        this.apellido = userData.apellido;
        this.rut = userData.rut;
      }
    });
  }

}
