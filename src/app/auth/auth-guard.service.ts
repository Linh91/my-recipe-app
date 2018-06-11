import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from './../store/app.reducers';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
    .take(1)
    .pipe(map((authState: fromAuth.State) => {
      return authState.authenticated;
    }));
  }

}
