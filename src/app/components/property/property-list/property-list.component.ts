import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyService } from '../../../services/property.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  properties!: any[]; 

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }

  viewDetail(id: string):void {
    this.router.navigate(['/properties/detail', id]);
  }

}
