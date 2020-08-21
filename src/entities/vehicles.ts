export default interface IVehicle {
    id: string
    plate: string
    brand: string
    model: string
    year: number
    color: string
    fuel?: string
    mileage?: number
}