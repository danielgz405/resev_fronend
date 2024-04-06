import { BookingsSchema } from "../booking/bookingSchemas";
import { RoleSchema } from "../role/roleSchemas";

export interface UserSchema {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: RoleSchema;
  image: string;
  image_ref: string;
  bookings: BookingsSchema;
}
