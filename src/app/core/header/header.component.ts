import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ServerService } from './../../servers/server.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from './../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private serverService: ServerService,
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
    this.store.dispatch(new RecipeActions.FetchRecipes());
    console.log('onfetch', this.store.select('recipes'));
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
