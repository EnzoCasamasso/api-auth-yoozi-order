export class Product {
    constructor(
        public id: string,
        public description: string,
        public salePrice: number,
        public costPrice: number,
        public margin?: number
    ) { }
}