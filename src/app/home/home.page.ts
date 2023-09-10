import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DataModalComponent } from '../data-modal/data-modal.component'; 
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  slideAnimationActive: boolean = false;
  NombreForm: FormGroup;
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  password: string = '';
  rut: string = '';
  nivelEducacion: string = '';
  selectedDate: string = '';
  showDatetimePicker: boolean = false;
  constructor(private modalController: ModalController, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute ) {
    this.NombreForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      
    });
    
  }

  async mostrarDatos() {
    const modal = await this.modalController.create({
      component: DataModalComponent,
      componentProps: {
        nombre: this.nombre,
        apellido: this.apellido,
        nivelEducacion: this.nivelEducacion,
      },
      backdropDismiss: false,
      cssClass: 'custom-modal'
    });

    return await modal.present();
  }

  limpiarCampos() {
    this.usuario = ''; 
    this.password = ''; 
    this.nombre = '';
    this.apellido = ''; 
    this.rut = ''; 
    this.slideAnimationActive = true;
    setTimeout(() => {
      this.slideAnimationActive = false; 
    }, 1000);
    
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
   
  }
  register() {
    const userData = {
      usuario: this.usuario,
      password: this.password,
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    this.router.navigate(['/login']);
  }

}