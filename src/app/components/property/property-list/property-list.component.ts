import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyService } from '../../../services/property.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  properties!: any[]; 

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

  navigateToDetail(propertyId: number): void {
    this.router.navigate(['properties/detail', propertyId.toString()]);
  }

  deleteProperty(id: number): void {
    this.propertyService.deleteProperty(id.toString()).subscribe(response => {
      console.log('Property deleted:', response);
      this.loadProperties(); // Refresh the list after deletion
    }, error => {
      console.error('Error deleting property:', error);
    });
  }
}
