import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PasswordviewComponent } from '../../passwordview/passwordview.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordviewComponent, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService) { }

  inputType: string = 'password';
  iconSrc: string = './assets/eye-off.svg';

  toggleInputType(event: Event): void {
    event.preventDefault();
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.iconSrc = './assets/eye.svg';
    } else {
      this.inputType = 'password';
      this.iconSrc = './assets/eye-off.svg';
    }
  }

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe();
  }
}
