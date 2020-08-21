export default interface ICustomer {
    id: string
    identifier: string
    identifierType: string
    fullname: string
    birthdate?: string
    phones?: []
    email?: string
}