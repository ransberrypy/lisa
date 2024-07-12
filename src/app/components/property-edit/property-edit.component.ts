import { Component } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyType, RentalStatusEnum } from '../../models/property.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './property-edit.component.html',
  styleUrl: './property-edit.component.css'
})
export class PropertyEditComponent {
  propertyForm!: FormGroup;
  propertyTypes = Object.values(PropertyType);
  availabilityStatuses = Object.values(RentalStatusEnum);
  propertyId!: number;


  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.paramMap.get('id')!;
    this.propertyService.getPropertyById(this.propertyId.toString()).subscribe(property => {
      this.propertyForm = this.fb.group({
        Name: [property.name, Validators.required],
        Price: [property.price, Validators.required],
        MeterNumber: [property.meterNumber],
        MeterImgFile: [null],
        Address: [property.address, Validators.required],
        Type: [property.type, Validators.required],
        RentalStatus: [property.rentalStatus, Validators.required]
      });
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.propertyForm.patchValue({ MeterImgFile: file });
  }

  onSubmit(): void {
    const formValue = this.propertyForm.value;
    const propertyDTO = {
      PropertyId: this.propertyId,
      Name: formValue.Name,
      Price: formValue.Price,
      MeterNumber: formValue.MeterNumber,
      MeterImg: formValue.MeterImg,
      Address: formValue.Address,
      Type: formValue.Type,
      RentalStatus: formValue.RentalStatus
    };

    this.propertyService.updateProperty(this.propertyId, propertyDTO).subscribe(response => {
      console.log('Property updated:', response);
      this.router.navigate(['/properties']);
    }, error => {
      console.error('Error updating property:', error);
    });
  }
}
