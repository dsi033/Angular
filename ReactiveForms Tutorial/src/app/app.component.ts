import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReactiveForms_Tutorial';

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '', [
          Validators.required,
          Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/),
        ]
      ],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ])
      ]
      )
    })
  }

  get PhoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.PhoneNumbers.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ])
    );
  }

  removePhoneNumber(index: number) {
    this.PhoneNumbers.removeAt(index);
  }


  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
