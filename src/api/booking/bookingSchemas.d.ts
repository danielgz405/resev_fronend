import { OrderSchema } from "../order/orderSchemas";
import { TableSchema } from "../table/tableSchemas";
import { UserSchema } from "../users/usersSchemas";

export interface BookingsSchema {
    _id: string;
    table: TableSchema;   
    user: UserSchema;
    order: OrderSchema;
    name: string;
    description: string;
    date: Date;
    hour: string;
}