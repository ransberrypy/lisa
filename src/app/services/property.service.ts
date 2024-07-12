import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProperties() {
    return this.http.get<any[]>(`${this.apiUrl}/api/property`);
  }

  // Method to fetch a single property by ID
  getPropertyById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/api/property/${id}`);
  }

  // Method to create a new property
  createProperty(property: FormData) {
    return this.http.post<any>(`${this.apiUrl}/api/property`, property
    );
  }

  // Method to update an existing property
  updateProperty(id:number, property: any) {
    return this.http.put<any>(`${this.apiUrl}/api/property/${property.id}`, property);
  }

  // Method to delete a property
  deleteProperty(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/api/property/${id}`);
  }
}
