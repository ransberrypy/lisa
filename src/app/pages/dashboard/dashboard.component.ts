import { Component } from '@angular/core';

// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// // import { AuthService } from '../../services/auth.service';
// import { TenantComponent } from '../../components/tenant/tenant.component';
// import { PropertyComponent } from '../../components/property/property.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    // TenantComponent,
    // PropertyComponent,
    // CommonModule,
    // RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // constructor(private authService: AuthService) { }

}
