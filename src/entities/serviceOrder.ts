import IVehicle from './vehicles';
import ICustomer from './customer';

export interface IServiceOrder {
    id: string
    createdAt: string
    vehicle: IVehicle
    customer: ICustomer 
    value?: number
    discounts?: number
    status: IServiceOrderStatus
    pieces?: IServiceOrder[] 
    labor?: IServiceOrder[]
}

export interface IServiceOrderItem {
    id: string
    description: string
    quantity: number
    value?: number
    unitaryValue?: number
    tags?: []
}

export enum IServiceOrderStatus {
    PENDING,
    DONE,
    WAITING_PIECES,
    WAITING_LABOR,
    EXECUTING,
    SCHEDULED,
    APPROVED,
    FINISHED
}