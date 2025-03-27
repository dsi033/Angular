import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms_Tutorial';

  user: { name: string; email: string; } = {
    name: '',
    email: '',
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value, this.user)
    }
  }

  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,4}$/
    return emailRegex.test(this.user.email);
  }

}
