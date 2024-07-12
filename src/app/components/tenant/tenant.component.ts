import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css'
})
export class TenantComponent {

}
