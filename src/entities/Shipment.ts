import { Document, Schema, model } from "mongoose";
import { ModelNames } from "./models.names";

export enum ShipmentStatus {
    PENDING = "pending",
    IN_TRANSIT = "in_transit",
    DELIVERED = "delivered",
}

export class Shipment extends Document {
    name: string;
    origin: string;
    destination: string;
    trackingNo: string;
    status: ShipmentStatus;
};

const ShipmentSchema = new Schema<Shipment>({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    trackingNo: { type: String, required: true, index: true },
    status: { type: String,enum: Object.values(ShipmentStatus), required: true },
},
    { timestamps: true },
);

export const ShipmentModel = model<Shipment>(ModelNames.SHIPMENT, ShipmentSchema);
