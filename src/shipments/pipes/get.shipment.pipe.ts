import httpStatus from "http-status";
import { PipelineStage } from "mongoose";

import { ShipmentModel } from "../../entities";
import { GetAllShipmentsDTO, GetSingleShipmentDTO } from "../DTOs";
import { getFilters, getPagination } from "../../shared";

export const GetSingleShipmentByIDPipe = async (GetSingleShipmentDTO: GetSingleShipmentDTO) => {
    const { shipmentID } = GetSingleShipmentDTO;
    const shipmentExist = await ShipmentModel.findById(shipmentID).lean();
    if (!shipmentExist) return { success: false, status: httpStatus.NOT_FOUND, message: `Shipment not found`, data: null, hookData: null };
    return { success: true, status: httpStatus.OK, message: `Shipment fetched successfully`, data: shipmentExist, hookData: shipmentExist };
};

export const GetAllShipmentsPipe = async (GetAllShipmentsDTO: GetAllShipmentsDTO) => {
    const { status, page, limit: _limit } = GetAllShipmentsDTO;
    const filters = getFilters({ status: String(status) })
    const { skip, limit } = getPagination(page, _limit);

    const aggregationPipeline = [
        {
            $match: {
                ...(filters.status ? { status: filters.status } : {}),
            }
        },
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: limit },
        {
            $facet: {
                shipments: [],
                totalCount: [{ $count: "count" }]
            }
        },
        {
            $project: {
                shipments: 1,
                totalCount: { $arrayElemAt: ["$totalCount.count", 0] }
            }
        }
    ];

    const [result] = await ShipmentModel.aggregate(aggregationPipeline as PipelineStage[]);
    const { shipments, totalCount } = result;

    const pagination = {
        currentPage: page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit) || 1,
    };

    const message = shipments.length === 0 ? `No shipment yet` : `Shipments fetched successfully`;
    return { success: true, status: httpStatus.OK, message, data: { shipments, pagination }, hookData: shipments };
};
