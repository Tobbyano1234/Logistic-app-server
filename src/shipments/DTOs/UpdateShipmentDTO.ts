import { ObjectId } from "mongodb";
import { ShipmentStatus } from "../../entities";

export type UpdateShipmentDTO = {
    shipmentID: ObjectId;
    trackingID: string;
    origin: string;
    destination: string;
    status: ShipmentStatus;
};
