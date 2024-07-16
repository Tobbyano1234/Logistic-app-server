import httpStatus from "http-status";

import { ShipmentModel } from "../../entities";
import { UpdateShipmentDTO } from "../DTOs";

export const UpdateShipmentPipe = async (UpdateShipmentDTO: UpdateShipmentDTO) => {
    const { shipmentID, origin, destination, status } = UpdateShipmentDTO;
    const shipment = await ShipmentModel.findById(shipmentID).lean();
    if (!shipment) return { success: false, status: httpStatus.NOT_FOUND, message: `Shipment not found`, data: null, hookData: null };
    const updatedShipment = await ShipmentModel.findByIdAndUpdate(shipment._id, { origin, destination, status }, { new: true });
    return { success: true, status: httpStatus.OK, message: `Shipment updated successfully`, data: updatedShipment, hookData: updatedShipment };
};