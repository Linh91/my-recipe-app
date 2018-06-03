import { AuthService } from './../../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sighup',
  templateUrl: './sighup.component.html',
  styleUrls: ['./sighup.component.css']
})
export class SighupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

}
