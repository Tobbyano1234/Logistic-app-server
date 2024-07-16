import { Shipment } from "./Shipment";

export enum ModelNames {
    SHIPMENT = "shipment",
}

export type ModelTypeMap = {
    [ModelNames.SHIPMENT]: Shipment,
}