import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { PropertyComponent } from '../property/property.component';
import { TenantComponent } from '../tenant/tenant.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [PropertyComponent, TenantComponent, CommonModule,
    RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(public authService: AuthService) { }
  onLogout(): void {
    this.authService.logout();
  }
}
