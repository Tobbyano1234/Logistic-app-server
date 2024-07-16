import httpStatus from "http-status";

import { generateTrackingNo } from "../../shared/generateTrackingNo";
import { ShipmentModel } from "../../entities";
import { CreateShipmentDTO } from "../DTOs/CreateShipmentDTO";

export const CreateShipmentPipe = async (CreateShipmentDTO: CreateShipmentDTO) => {
    const { name, origin, destination } = CreateShipmentDTO;
    const shipmentExist = await ShipmentModel.findOne({ name }).lean();
    if (shipmentExist) return { success: false, status: httpStatus.CONFLICT, message: `Shipment with ${name} already exist`, data: null, hookData: null };
    const trackingNo = generateTrackingNo();
    const newShipment = await ShipmentModel.create({ name, origin, destination, trackingNo, status: 'pending' });
    return { success: true, status: httpStatus.CREATED, message: `Shipment created successfully`, data: newShipment, hookData: newShipment };
}

