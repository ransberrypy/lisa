import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { PropertyService } from '../../../services/property.service';


@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit {
  property: any; // Replace any with your property model interface/type
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id') || '1';;
    this.subscription.add(
      this.propertyService.getPropertyById(propertyId).subscribe(property => {
        this.property = property;
      }, error => {
        console.error('Error fetching property:', error);
        // Handle error accordingly
      })
    );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
