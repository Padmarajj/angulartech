import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  incorrectCredentials = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  Submit() {
    this.submitted = true;

    if (this.userForm.valid) {
      // Perform login logic
      if (this.userForm.get('email')?.value === "test@gmail.com" && this.userForm.get('password')?.value === "test123") {
        this.router.navigate(['/grid']);
      } else {
        // Handle incorrect credentials
        this.incorrectCredentials = true;
      }
    } else {
      // Only mark the form controls as touched when the form is invalid and the submit button is clicked
      this.markFormGroupTouched(this.userForm);
    }
  }


  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
