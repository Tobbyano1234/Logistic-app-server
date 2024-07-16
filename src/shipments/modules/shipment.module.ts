import { match, P } from 'ts-pattern';

import { triggerSuccessFailureHooks } from '../../shared/triggerHooks';
import { Shipment} from '../types';
import { CreateShipmentPipe, DeleteShipmentPipe, GetAllShipmentsPipe, GetSingleShipmentByIDPipe, UpdateShipmentPipe } from '../pipes';


export const ShipmentModule = ({ DTO, onSuccess }: Shipment) =>
  match(DTO)
  .with(['basic', P._], async ([, CreateShipmentDTO]) => {
    const shipmentPipe = await CreateShipmentPipe(CreateShipmentDTO);
      triggerSuccessFailureHooks(shipmentPipe, onSuccess);
      return shipmentPipe;
    })
  .with(['update', P._], async ([, UpdateShipmentDTO]) => {
    const shipmentPipe = await UpdateShipmentPipe(UpdateShipmentDTO);
      triggerSuccessFailureHooks(shipmentPipe, onSuccess);
      return shipmentPipe;
    })
  .with(['single', P._], async ([, GetSingleShipmentDTO]) => {
    const shipmentPipe = await GetSingleShipmentByIDPipe(GetSingleShipmentDTO);
      triggerSuccessFailureHooks(shipmentPipe, onSuccess);
      return shipmentPipe;
    })
  .with(['all', P._], async ([, GetAllShipmentsDTO]) => {
    const shipmentPipe = await GetAllShipmentsPipe(GetAllShipmentsDTO);
      triggerSuccessFailureHooks(shipmentPipe, onSuccess);
      return shipmentPipe;
    })
  .with(['delete', P._], async ([, DeleteShipmentDTO]) => {
    const shipmentPipe = await DeleteShipmentPipe(DeleteShipmentDTO);
      triggerSuccessFailureHooks(shipmentPipe, onSuccess);
      return shipmentPipe;
    })
    .exhaustive();
