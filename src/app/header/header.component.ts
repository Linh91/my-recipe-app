import { AuthService } from './../auth.service';
import { ServerService } from './../servers/server.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private serverService: ServerService, private authService: AuthService) {}

  onSave() {
    this.serverService.recipeServers()
    .subscribe(
      (response: Response) => {
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
}
