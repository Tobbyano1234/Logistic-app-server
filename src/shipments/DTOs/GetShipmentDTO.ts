import { ObjectId } from "mongodb";

export type GetSingleShipmentDTO = {
    shipmentID: ObjectId;
};

export type GetAllShipmentsDTO = {
    page?: number;
    limit?: number;
    status?: string;
};
