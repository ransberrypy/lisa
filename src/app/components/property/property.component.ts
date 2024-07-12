import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyCreateComponent } from './property-create/property-create.component';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule,
    RouterModule, PropertyListComponent, PropertyCreateComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent {

}
