class OrderDetail {
    public orderDetailId: number = 0;
    public productName: string = '';
    public price: number = 0;

    constructor(
        orderDetailId_: number,
        productName_: string,
        price_: number
    ) {
        this.orderDetailId = orderDetailId_;
        this.productName = productName_;
        this.price = price_;
    }
}

export default OrderDetail;