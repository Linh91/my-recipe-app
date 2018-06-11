import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/auth.service';
import { ServerService } from './../../servers/server.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private serverService: ServerService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSave() {
    this.serverService.recipeServers()
    .subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetch() {
    this.serverService.getRecipeServer();
  }

  onLogout() {
    this.authService.logout();
  }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  // }
}
