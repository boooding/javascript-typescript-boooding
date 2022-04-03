import OrderDetail from './OrderDetail';
class Order {
    // public orderId: number;
    // public date: Date;
    // public name: string;
    //
    // public orderDetail: Array<OrderDetail>;
    //
    constructor(
        public orderId_: number,
        public date_: Date,
        public name_: string,
        public orderDetail_: Array<OrderDetail>,
    ) {
        // this.orderId = orderId_;
        // this.date = date_;
        // this.name = name_;
        // this.orderDetail = orderDetail_;
    }
}

const orderDetail_1 = new OrderDetail(1, 'booding', 100);
const orderDetail_2: OrderDetail = new OrderDetail(1, 'boooding', 10000);
const orderDetail_Arr: Array<OrderDetail> = [orderDetail_1, orderDetail_2];
const orderDate = new Date(2022, 9, 1, 17, 0, 0);

const order = new Order(1, orderDate, 'boooding google', orderDetail_Arr)

console.log(order)