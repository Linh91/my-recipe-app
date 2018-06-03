import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sighup',
  templateUrl: './sighup.component.html',
  styleUrls: ['./sighup.component.css']
})
export class SighupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }

}
