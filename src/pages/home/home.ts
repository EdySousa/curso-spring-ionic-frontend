import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciasDTO } from '../../models/credencias.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciasDTO = {
    email: '',
    senha: ''
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) {

  }

  login() {
    console.log(this.creds);
    this.navCtrl.push('CategoriasPage');
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }


}
