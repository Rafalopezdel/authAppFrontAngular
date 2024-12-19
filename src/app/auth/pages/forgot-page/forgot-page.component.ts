import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-page',
  standalone: false,

  templateUrl: './forgot-page.component.html',
  styleUrl: './forgot-page.component.css'
})
export class ForgotPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router)

  public myForm: FormGroup = this.fb.group({
    email: ['rafael@gmail.com', [Validators.required, Validators.email]],
  })

  forgot() {
    // const { email } = this.myForm.value;

    // this.authService.forgot(email)

    // Swal.fire({
    //   title: `El codigo de recuperacion a sido enviado a ${email} `,
    //   icon: "success",
    //   draggable: true
    // });
    // this.myForm.reset();

    if (this.myForm.valid) {
      const email = this.myForm.value.email;
      
      this.authService.forgot(email)
      
  
    }
   
  }
}
