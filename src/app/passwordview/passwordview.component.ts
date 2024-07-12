import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordview',
  standalone: true,
  imports: [],
  templateUrl: './passwordview.component.html',
  styleUrl: './passwordview.component.css'
})
export class PasswordviewComponent {
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
}
