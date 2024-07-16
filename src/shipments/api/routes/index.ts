import { ShipmentController } from '../controllers';
import { baseRouter, baseValidation } from '../../../shared/api';
import ShipmentValidation from '../validations/index';

const { POST, GET, PUT, DELETE, router } = baseRouter();

POST('/', [baseValidation(ShipmentValidation.createShipment), ShipmentController.createShipment]);
PUT('/:shipmentID', [baseValidation(ShipmentValidation.updateShipment), ShipmentController.updateShipment]);
GET('/:shipmentID', [baseValidation(ShipmentValidation.getSingleShipment), ShipmentController.getSingleShipmentByID]);
GET('/', [baseValidation(ShipmentValidation.getAllShipments), ShipmentController.getAllShipments]);
DELETE('/:shipmentID', [baseValidation(ShipmentValidation.deleteShipment), ShipmentController.deleteShipment]);

export default router;
