export class ClientDto {
    constructor(
        public id: string,
        public name: string,
        public orders?: any[],
        public clientcontact?: any,
        public clientContactId?: string
    ) {}
}