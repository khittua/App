import { Component, OnInit,Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss'],
})
export class DataModalComponent  implements OnInit {
  @Input() nivelEducacion: string = '';
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }
  

  ngOnInit() {}

}
