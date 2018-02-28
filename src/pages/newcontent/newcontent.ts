import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content';


/**
 * Generated class for the NewcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcontent',
  templateUrl: 'newcontent.html',
})
export class NewcontentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcontentPage');
  }

  irParaContent(){
    this.navCtrl.push(ContentPage);
  }

}
