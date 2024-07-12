import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyService } from '../../../services/property.service';
import { Router } from '@angular/router';

enum PropertyType {
  Apartment = 'Apartment',
  House = 'House',
  Condo = 'Condo',
  Townhouse = 'Townhouse',
  Commercial = 'Commercial'
}

enum AvailabilityStatus {
  Available = 'Available',
  Occupied = 'Occupied',
  UnderMaintenance = 'UnderMaintenance'
}

@Component({
  selector: 'app-property-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit {
  propertyForm!: FormGroup;
  propertyTypes = Object.values(PropertyType);
  availabilityStatuses = Object.values(AvailabilityStatus);

  constructor(private fb: FormBuilder, private propertyService: PropertyService, private router: Router) { }

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      Name: [''],
      Price: [''],
      MeterNumber: [''],
      MeterImgFile: [null],
      Address: [''],
      Type: [''],
      RentalStatus: ['']
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.propertyForm.patchValue({ MeterImgFile: file });
  }

  onSubmit(): void {
    const formValue = this.propertyForm.value;

    const formData = new FormData();
    formData.append('Name', formValue.Name);
    formData.append('Price', formValue.Price);
    formData.append('MeterNumber', formValue.MeterNumber);
    if (formValue.MeterImgFile) {
      formData.append('MeterImg', formValue.MeterImgFile);
    }
    formData.append('Address', formValue.Address);
    formData.append('Type', formValue.Type);
    formData.append('RentalStatus', formValue.RentalStatus);

    this.propertyService.createProperty(formData).subscribe(response => {
      console.log('Property created:', response);
      this.router.navigate(['/properties']);
    }, error => {
      console.error('Error creating property:', error);
    });
  }
}
