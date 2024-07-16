import { CreateShipmentDTO, DeleteShipmentDTO, GetAllShipmentsDTO, GetSingleShipmentDTO, UpdateShipmentDTO, } from "./DTOs";


export type Shipment = {
  DTO:
  | ['basic', CreateShipmentDTO]
  | ['update', UpdateShipmentDTO]
  | ['single', GetSingleShipmentDTO]
  | ['all', GetAllShipmentsDTO]
  | ['delete', DeleteShipmentDTO];
  onSuccess: (...args: any[]) => any;
}

