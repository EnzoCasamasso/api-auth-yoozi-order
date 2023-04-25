export class Product {
    constructor(
        private id: string,
        public description: string,
        public salePrice: number,
        public costPrice: number,
        public margin?: number
    ) { }
}