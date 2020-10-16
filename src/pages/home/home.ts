import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciasDTO } from '../../models/credencias.dto';
import { AuthService } from '../../services/auth.service';

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
    public menu: MenuController,
    public auth: AuthService
  ) {

  }

  login() {
    this.auth.authenticate(this.creds).subscribe(response => {
      this.auth.sucessfulLogin(response.headers.get('Authorization'));
      this.navCtrl.push('CategoriasPage');
    },
      error => { });
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }


}
