import { PlatesSchema } from "../plate/platesSchema";
import { TableSchema } from "../table/tableSchemas";
import { UserSchema } from "../users/usersSchemas";

export interface OrderSchema {
    _id: string;
    table: TableSchema;
    user: UserSchema;
    subtotal: number;
    iva: number;
    total: number;
    timeStamp: number;
    plates: PlatesSchema[];
}