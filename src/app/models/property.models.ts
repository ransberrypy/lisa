// property.model.ts

export enum PropertyType {
    Apartment = 'Apartment',
    House = 'House',
    Condo = 'Condo',
    Townhouse = 'Townhouse',
    Commercial = 'Commercial'
}

export enum RentalStatusEnum {
    Available = 'Available',
    Occupied = 'Occupied',
    UnderMaintenance = 'UnderMaintenance'
}

export interface Property {
    propertyId: number;
    name: string;
    price: number;
    meterNumber?: string;
    meterImg?: string;
    address?: string;
    type: PropertyType;
    rentalStatus: RentalStatusEnum;
    updatedAt: Date;
}
