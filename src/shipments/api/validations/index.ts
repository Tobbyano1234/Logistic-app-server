import { Joi } from 'celebrate';

export default {
    createShipment: {
        body: Joi.object({
            name: Joi.string().max(50).required(),
            origin: Joi.string().required(),
            destination: Joi.string().required(),
        })
    },
    updateShipment: {
        body: Joi.object({
            name: Joi.string().max(50).optional(),
            origin: Joi.string().optional(),
            destination: Joi.string().optional(),
            status: Joi.string().valid("pending", "in_transit", "delivered").optional(),
        }),
        params: Joi.object({
            shipmentID: Joi.string().required(),
        })
    },
    getSingleShipment: {
        params: Joi.object({
            shipmentID: Joi.string().required(),
        })
    },
    getAllShipments: {
        query: Joi.object({
            page: Joi.number().required(),
            limit: Joi.number().required(),
            status: Joi.string().valid("pending", "in_transit", "delivered").optional(),
        })
    },
    deleteShipment: {
        params: Joi.object({
            shipmentID: Joi.string().required(),
        })
    }
}