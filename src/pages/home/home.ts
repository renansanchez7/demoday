import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentPage } from '../content/content';
import { CadastroPage } from '../cadastro/cadastro';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irParaContent(){
    this.navCtrl.push(ContentPage);
  }

  irParaCadastro(){
    this.navCtrl.push(CadastroPage);
  }

}
