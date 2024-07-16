import httpStatus from "http-status";

import { ShipmentModel } from "../../entities";
import { DeleteShipmentDTO } from "../DTOs";

export const DeleteShipmentPipe = async (DeleteShipmentDTO: DeleteShipmentDTO) => {
    const { shipmentID } = DeleteShipmentDTO;
    const shipment = await ShipmentModel.findById(shipmentID).lean();
    if (!shipment) return { success: false, status: httpStatus.NOT_FOUND, message: `Shipment not found`, data: null, hookData: null };
    await ShipmentModel.findByIdAndDelete(shipment._id);
    return { success: true, status: httpStatus.NO_CONTENT, message: `Shipment deleted successfully`, data: null, hookData: null };
};