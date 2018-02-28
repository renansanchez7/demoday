import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { NewcontentPage } from '../newcontent/newcontent';


/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

  irParaItem(){
    this.navCtrl.push(ItemPage);
  }

  irParaNewContent(){
    this.navCtrl.push(NewcontentPage);
  }

}
