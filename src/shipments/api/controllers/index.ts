import { Request } from 'express';

import { BaseController } from "../../../shared/api";
import { ShipmentModule } from '../../modules/shipment.module';
import { CreateShipmentDTO, DeleteShipmentDTO, GetAllShipmentsDTO, GetSingleShipmentDTO, UpdateShipmentDTO } from '../../../shipments/DTOs';
import { toObjectId } from '../../../shared/helpers/validateToObjectId';

export class ShipmentController {
  static createShipment = BaseController(async (request: Request) => {
    const CreateShipmentDTO = request.body as CreateShipmentDTO;
    const { status, message, data } = (await ShipmentModule({ DTO: ["basic", CreateShipmentDTO], onSuccess: () => { } }))!;
    return { status, message, data };
  });

  static updateShipment = BaseController(async (request: Request) => {
    const UpdateShipmentDTO = request.body as UpdateShipmentDTO;
    UpdateShipmentDTO.shipmentID = toObjectId(request.params.shipmentID);
    const { status, message, data } = (await ShipmentModule({ DTO: ["update", UpdateShipmentDTO], onSuccess: () => { } }))!;
    return { status, message, data };
  });

  static getSingleShipmentByID = BaseController(async (request: Request) => {
    const GetSingleShipmentDTO = {} as GetSingleShipmentDTO;
    GetSingleShipmentDTO.shipmentID = toObjectId(request.params.shipmentID);
    const { status, message, data } = (await ShipmentModule({ DTO: ["single", GetSingleShipmentDTO], onSuccess: () => { } }))!;
    return { status, message, data };
  });

  static getAllShipments = BaseController(async (request: Request) => {
    const GetAllShipmentsDTO = {} as GetAllShipmentsDTO;
    GetAllShipmentsDTO.status = request.query.status as string;
    GetAllShipmentsDTO.page = parseInt(request.query.page as string);
    GetAllShipmentsDTO.limit = parseInt(request.query.limit as string);
    const { status, message, data } = (await ShipmentModule({ DTO: ["all", GetAllShipmentsDTO], onSuccess: () => { } }))!;
    return { status, message, data };
  });

  static deleteShipment = BaseController(async (request: Request) => {
    const DeleteShipmentDTO = {} as DeleteShipmentDTO;
    DeleteShipmentDTO.shipmentID = toObjectId(request.params.shipmentID);
    const { status, message, data } = (await ShipmentModule({ DTO: ["delete", DeleteShipmentDTO], onSuccess: () => { } }))!;
    return { status, message, data };
  });
}
