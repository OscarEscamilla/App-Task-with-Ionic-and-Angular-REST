import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks = [];

  

  constructor(private taskService: TaskService, private alertController: AlertController) {

    this.taskService.getAllTask().subscribe(data => {
      this.tasks = data;
      console.log(data);
    });

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'New Task',
      inputs: [
        {
          name: 'Task',
          type: 'text',
          placeholder: ''
        }
      ],
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'save',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }



}
