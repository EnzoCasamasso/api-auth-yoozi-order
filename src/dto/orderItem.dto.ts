export class OrderItem {
    constructor(
       public id: string,
       public productName: string,
       public order: any,
       public orderId: string,
       public amount: number,
       public subtotal: number      
    ) { }
}