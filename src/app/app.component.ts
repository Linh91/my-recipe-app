import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = '';

  onNavigate(feature) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQi_QVoUoLlLbQSODkyDQetX1NFnJMw00',
      authDomain: 'my-recipe-app-6e513.firebaseapp.com',
    });
  }
}
