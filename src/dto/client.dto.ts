export class ClientDto {
    constructor(
        private id: string,
        public name: string,
        public orders?: any[],
        public clientcontact?: any,
        public clientContactId?: string
    ) {}
}